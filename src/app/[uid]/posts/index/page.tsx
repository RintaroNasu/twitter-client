"use client";

import { Post } from "@/types/posts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MenuBar } from "@/components/MenuBar";
import { getPosts } from "@/app/api/posts";
import { Search } from "@/components/Search";

export default function Index() {
  const params = useParams();
  const uid = params.uid.toString();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="flex justify-center gap-24 mt-4">
        <MenuBar uid={uid} />
        <div className="w-[35vw] min-h-screen h-auto border-l-2 border-r-2 border-l-gray-700 border-r-gray-700">
          <div>
            {posts.map((post: Post) => (
              <Link key={post.id} href={`http://localhost:3000/${uid}/posts/${post.id}`} className="text-white no-underline">
                <div className=" border-gray-700 border rounded-lg p-5 hover:bg-gray-700 h-40">
                  <p>{post.content}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Search />
      </div>
    </>
  );
}

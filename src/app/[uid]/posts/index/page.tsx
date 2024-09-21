"use client";

import { Post } from "@/types/posts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MenuBar } from "@/components/MenuBar";
import { getPosts } from "@/app/api/posts";
import { Search } from "@/components/Search";
import { useSession } from "next-auth/react";
import { postBookMark, deleteBookMark } from "@/app/api/bookMark"; // deleteBookMarkもインポート

export default function Index() {
  const { data: session, status } = useSession();
  const [bookMarked, setBookmarked] = useState<boolean>(false);
  const params = useParams();
  const uid = params.uid.toString();
  const [posts, setPosts] = useState<Post[]>([]);

  const handleBookMark = async (postId: string) => {
    try {
      if (bookMarked) {
        await deleteBookMark(postId, uid); 
      } else {
        await postBookMark(postId, uid); 
      }
      setBookmarked(!bookMarked); 
    } catch (error) {
      console.error("Failed to toggle bookmark:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      console.log(posts);
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
              <div key={post.id} className="border-gray-700 border rounded-lg p-5 hover:bg-gray-700 h-40">
                <Link href={`http://localhost:3000/${uid}/posts/${post.id}`} className="text-white no-underline">
                  <p>{post.content}</p>
                  <p>{post.user.name}</p>
                </Link>
                <button
                  onClick={() => handleBookMark(post.id)} 
                  className="text-white"
                >
                  {bookMarked ? "BookMarked" : "BookMark"}
                </button>
              </div>
            ))}
          </div>
        </div>
        <Search />
      </div>
    </>
  );
}

"use client";

import { Post } from "@/types/posts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useParams } from "next/navigation";
import { MenuBar } from "@/components/MenuBar";

export default function Index() {
  const params = useParams();
  const uid = params.uid.toString();
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await fetch("http://localhost:3001/api/v1/posts");
    //   const posts: Post[] = await res.json();
    //   setPosts(posts);
    // };
    // fetchData();
  }, []);
  return (
    <>
      <div className="flex justify-center gap-24 mt-4">
        <MenuBar uid={uid} />
        <div className="w-[35vw] h-screen border-l-2 border-r-2 border-l-gray-700 border-r-gray-700">
          <div className="bg-white">
            {posts.map((post: Post) => (
              <div key={post.id} className="border border-gray-300 rounded-lg p-5 mb-5">
                <Link href={`posts/${post.id}`} className="text-blue-800 no-underline">
                  <h2 className="mb-2.5">{post.title}</h2>
                </Link>
                <p>{post.content}</p>
                <button className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded mr-2">Edit</button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center mt-5">
            <input placeholder="Search" className="rounded-3xl py-2 px-4 bg-gray-800" />
            <FaSearch className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
}

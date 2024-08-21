"use client";
import React, { useEffect, useState } from "react";
import { Post } from "@/types/posts";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getPost } from "@/api/posts";
import { MenuBar } from "@/components/MenuBar";
import { FaSearch } from "react-icons/fa";

export default function Page() {
  const params = useParams();
  const id = params.id.toString();
  const uid = params.uid.toString();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const fetchData = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex justify-center gap-24 mt-4">
        <MenuBar uid={uid} />
        <div className="w-[35vw] h-screen border-l-2 border-r-2 border-l-gray-700 border-r-gray-700">
          <div className="text-white">{post?.content}</div>
          <div className="text-white">{post?.created_at}</div>
          <Link href="/">TOP</Link>
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

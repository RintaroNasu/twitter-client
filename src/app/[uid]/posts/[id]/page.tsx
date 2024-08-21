"use client";
import React, { useEffect, useState } from "react";
import { Post } from "@/types/posts";
import { useParams } from "next/navigation";
import { deletePost, getPost } from "@/api/posts";
import { MenuBar } from "@/components/MenuBar";
import { useRouter } from "next/navigation";
import { Search } from "@/components/Search";

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const id = params.id.toString();
  const uid = params.uid.toString();
  const [post, setPost] = useState<Post>();

  const onClickDeletePost = async (id: string) => {
    await deletePost(id).then(() => {
      router.push(`/${uid}/posts/index`);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="flex justify-center gap-24 mt-4">
        <MenuBar uid={uid} />
        <div className="w-[35vw] h-screen border-l-2 border-r-2 border-l-gray-700 border-r-gray-700">
          <div className="border-b-2 flex justify-between border-b-gray-700">
            <div className="flex flex-col">
              <div className="text-white pl-3">{post?.content}</div>
              <div className="text-white pl-3">{post?.id}</div>
              <div className="text-white pl-3">{post?.created_at}</div>
            </div>
            <button className="px-3 py-1.5 bg-blue-500 text-white rounded-3xl text-center mb-5 no-underline hover:bg-blue-700 mr-3" onClick={() => post?.id && onClickDeletePost(post.id)}>
              削除
            </button>
          </div>
        </div>
        <Search />
      </div>
    </>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { Post } from "@/types/posts";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const params = useParams();
  const id = params.id;
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3001/api/v1/posts/${id}`);
      const post: Post = await res.json();
      setPost(post);
      console.log(post);
    };
    fetchData();
  }, []);
  return (
    <>
    <div>
      <h2>詳細ページ</h2>
      <div>{post?.title}</div>
      <div>{post?.content}</div>
      <div>{post?.created_at}</div>
      <Link href="/">TOP</Link>
    </div>
    </>
  );
}

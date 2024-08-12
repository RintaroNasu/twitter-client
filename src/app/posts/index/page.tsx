"use client";
import { Post } from "@/types/posts";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Index() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/api/v1/posts");
      const posts: Post[] = await res.json();
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        {posts.map((post: Post) => (
          <div key={post.id}></div>
        ))}
      </div>
    </>
  );
}

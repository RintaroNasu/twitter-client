"use client";

import { Post } from "@/types/posts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MenuBar } from "@/components/MenuBar";
import { getPosts } from "@/app/api/posts";
import { Search } from "@/components/Search";
import { useSession } from "next-auth/react";
import { postBookMark, deleteBookMark, getUserBookMarks } from "@/app/api/bookMark";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { BookMark } from "@/types/bookMarks";

export default function Index() {
  const { data: session, status } = useSession();
  const params = useParams();
  const uid = params.uid.toString();
  const [posts, setPosts] = useState<Post[]>([]);

  const handleBookMark = async (postId: string) => {
    const isBookMarked = posts.find((post) => post.id === postId)?.isBookMarked;
    try {
      if (isBookMarked) {
        await deleteBookMark(postId, uid);
      } else {
        console.log(postId, uid);
        await postBookMark(postId, uid);
      }
      setPosts((prevPosts) => prevPosts.map((post) => (post.id === postId ? { ...post, isBookMarked: !isBookMarked } : post)));
    } catch (error) {
      console.error("Failed to toggle bookmark:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      const bookMarks = await getUserBookMarks(uid);
      const postsWithBookMark = posts.map((post: Post) => ({
        ...post,
        isBookMarked: bookMarks.some((b: BookMark) => b.post_id === post.id), //someメソッドは配列の中に条件を満たす要素があるかどうかを判定する
      }));
      setPosts(postsWithBookMark);
      console.log(postsWithBookMark);
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
                <button onClick={() => handleBookMark(post.id)} className="text-white mt-2">
                  {post.isBookMarked ? <FaBookmark /> : <FaRegBookmark />}
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

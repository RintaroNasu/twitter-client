"use client";
import { MenuBar } from "@/components/MenuBar";
import Image from "next/image";
import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";
import { Search } from "@/components/Search";
import { useSession } from "next-auth/react";
import { Post } from "@/types/posts";
import Link from "next/link";
import { getUserPosts } from "@/app/api/users";

export default function Page() {
  const { data: session, status } = useSession();
  const [userPosts, setPosts] = useState<Post[]>([]);
  const params = useParams();
  const uid = params.uid.toString();

  useEffect(() => {
    const fetchData = async () => {
      if (session?.user.id) {
        const userPosts = await getUserPosts(session?.user.id);
        setPosts(userPosts);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex justify-center gap-24 mt-4">
        <MenuBar uid={uid} />
        <div className="w-[35vw] h-screen border-l-2 border-r-2 border-l-gray-700 border-r-gray-700">
          <div className="border-b-2 border-b-gray-700">
            <div className="h-[20vh] text-white bg-gray-800"></div>
            <div className="flex justify-between">
              <div className="ml-5">
                <Image src="/twitter.jpg" alt="twitter" width={100} height={50} />
              </div>
            </div>
            <h2 className="text-white text-[25px] ml-5">{session?.user.name}</h2>
            <div className="ml-5 mb-8">
              <span className="text-white mr-4">
                22<span className="text-gray-500">Following</span>
              </span>
              <span className="text-white mr-4">
                22<span className="text-gray-500">Followers</span>
              </span>
            </div>
            <div className="ml-5 flex gap-5">
              <div className="text-white hover:bg-gray-700 hover:border-b-4 hover:border-b-blue-500 p-2">Posts</div>
              <div className="text-white hover:bg-gray-700 hover:border-b-4 hover:border-b-blue-500 p-2">Likes</div>
            </div>
          </div>
          <div>
            {userPosts &&
              userPosts.map((post: Post) => (
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

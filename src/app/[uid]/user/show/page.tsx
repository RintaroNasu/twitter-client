"use client";
import { MenuBar } from "@/components/MenuBar";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Search } from "@/components/Search";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status} = useSession();
  const params = useParams();
  const uid = params.uid.toString();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const onCloseEditModal = () => setIsOpenModal(false);
  const isOpenEditModal = () => {
    setIsOpenModal(true);
  };
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
            {/* {session?.user.id}idの情報をバックエンドに送信してそのidの投稿を取得して表示*/}
          </div>
        </div>
        <Search />
      </div>
    </>
  );
}

"use client";
import { NewModal } from "@/app/[uid]/posts/new/NewModal";
import Logout from "@/app/auth/Logout/page";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaRegBookmark } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

export const MenuBar = ({ uid }: { uid: string }) => {
  const { data: session, status } = useSession();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const onCloseEditModal = () => setIsOpenModal(false);
  const isOpenEditModal = () => {
    setIsOpenModal(true);
  };
  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <Image src="/twitter.jpg" alt="twitter" width={50} height={50} />
        </div>
        <Link href={`http://localhost:3000/${uid}/posts/index`} className="flex gap-3 p-2 items-center hover:bg-gray-600 rounded-3xl">
          <IoHomeOutline className="text-white" />
          <h2 className="text-white text-[25px]">Home</h2>
        </Link>
        <Link href={`http://localhost:3000/${uid}/posts/bookMark`} className="flex gap-3 p-2 items-center hover:bg-gray-600 rounded-3xl">
          <FaRegBookmark className="text-white" />
          <h2 className="text-white text-[25px]">Bookmark</h2>
        </Link>
        <Link href={`http://localhost:3000/${uid}/user/show`} className="flex gap-3 p-2 items-center hover:bg-gray-600 rounded-3xl">
          <CgProfile className="text-white" />
          <h2 className="text-white text-[25px]">Profile</h2>
        </Link>
        {status == "authenticated" ? (
          <Link href="" className="flex gap-3 p-2 items-center hover:bg-gray-600 rounded-3xl">
            <BiLogOut className="text-white" />
            <Logout />
          </Link>
        ) : (
          ""
        )}
        <div className="inline-block px-5 py-2.5 bg-blue-500 text-white rounded-3xl text-center mb-5 no-underline hover:bg-blue-700" onClick={isOpenEditModal}>
          Post
        </div>
      </div>
      <NewModal isOpen={isOpenModal} onClose={onCloseEditModal} uid={uid}/>
    </>
  );
};

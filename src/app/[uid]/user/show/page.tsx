"use client"
import { MenuBar } from "@/components/MenuBar";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function Page() {
  const params = useParams();
  const uid = params.uid.toString();
  return (
    <>
      <div className="flex justify-center gap-24 mt-4">
        <MenuBar uid={uid} />
        <div className="w-[35vw] h-screen border-l-2 border-r-2 border-l-gray-700 border-r-gray-700 bg-white">
          <div>
            <div>
              BACKGROUNDIMAGE
            </div>
            <div>
              <Link href="">Edit profile</Link>
            </div>
            <h2>name</h2>
            <div>
              <span>22Following</span>
              <span>15Followers</span>
            </div>
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

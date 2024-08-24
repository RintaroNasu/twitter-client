"use client";
import { MenuBar } from "@/components/MenuBar";
import { Search } from "@/components/Search";
import { useParams } from "next/navigation";

export default function bookMark() {
  const params = useParams();
  const uid = params.uid.toString();
  return (
    <>
      <div className="flex justify-center gap-24 mt-4">
        <MenuBar uid={uid} />
        <div className="w-[35vw] h-screen border-l-2 border-r-2 border-l-gray-700 border-r-gray-700"></div>
        <Search />
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import Login from "./auth/Login/page";
import { useSession } from "next-auth/react";
import Logout from "./auth/Logout/page";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  useEffect(() => {

  })
  return (
    <>
      <div className="flex justify-center gap-11 items-center h-full">
        <div>
          <Image src="/twitter.jpg" alt="twitter" width={600} height={300} />
        </div>
        <div className="flex flex-col gap-11">
          <p className="text-white text-[80px] font-bold">すべての話題が、ここに</p>
          <p className="text-white text-[30px] font-bold">今すぐ参加しましょう。</p>
          {status === "authenticated" ? (
            <div>
              <p className="text-white">ようこそ、{session.user?.name}さん</p>
              <Logout />
            </div>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </>
  );
}

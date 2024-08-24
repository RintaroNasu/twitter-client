"use client";

import { signOut, useSession } from "next-auth/react";

export default function Logout() {
  const { data: session, status } = useSession();
  if (status == "authenticated") {
    return (
      <div onClick={() => signOut()} className="w-36 px-5 py-2.5 bg-blue-500 text-white rounded-3xl text-center no-underline hover:bg-blue-700 font-bold">
        ログアウト
      </div>
    );
  }
}

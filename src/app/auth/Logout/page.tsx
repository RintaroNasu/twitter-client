"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const handleLogout = async () => {
    // try {
    //   // サインアウト処理を実行
    await signOut({ redirect: false });

    // } catch (error) {
    //   console.error("Logout failed:", error);
    //   // エラーハンドリングを追加
    // }
  };
  return (
    <div onClick={handleLogout} className="text-white text-[25px]">
      Logout
    </div>
  );
}

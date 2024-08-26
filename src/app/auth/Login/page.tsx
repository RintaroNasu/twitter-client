"use client";

import React from "react";
import { useSession, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status !== "authenticated") {
    return (
      <div>
        <button onClick={() => signIn("google", {}, { prompt: "login" })} className="px-5 py-2.5 bg-blue-500 text-white rounded-3xl text-center mb-5 no-underline hover:bg-blue-700 font-bold flex items-center gap-2">
          <div>Googleでログイン</div>
          <FcGoogle />
        </button>
      </div>
    );
  }
  return null;
}

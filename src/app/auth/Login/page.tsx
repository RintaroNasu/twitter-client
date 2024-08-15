"use client";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function Page() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {};
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div>
          <Image src="/twitter.jpg" alt="twitter" width={50} height={100} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <div className="flex text-black items-center text-3xl mb-8">Xにログイン</div>
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700">メールアドレス</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700">パスワード</label>
            <div className="relative">
              <input type="password" value={password} onChange={handlePasswordChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Link href="/">Topへ</Link>
            <button className="bg-blue-400 w-[50%] text-white py-2 px-4 rounded-3xl hover:bg-blue-500" onClick={handleLogin}>
              ログイン
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

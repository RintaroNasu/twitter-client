import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center gap-11 items-center h-full">
        <div>
          <Image src="/twitter.jpg" alt="twitter" width={600} height={300} />
        </div>
        <div className="flex flex-col gap-11">
          <p className="text-white text-[80px] font-bold">すべての話題が、ここに</p>
          <p className="text-white text-[30px] font-bold">今すぐ参加しましょう。</p>
          <div className="flex flex-col gap-4">
            <Link href="auth/SignUp" className="bg-blue-400 w-[50%] text-white py-2 px-4 rounded-3xl hover:bg-blue-500">アカウントを作成</Link>
            <Link href="auth/Login" className="bg-blue-400 w-[50%] text-white py-2 px-4 rounded-3xl hover:bg-blue-500">ログイン</Link>
          </div>
        </div>
      </div>
    </>
  );
}

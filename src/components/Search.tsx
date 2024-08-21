"use client";
import { getPostsBySearch } from "@/api/posts";
import { Post } from "@/types/posts";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
  const params = useParams();
  const uid = params.uid.toString();
  const [search, setSearch] = useState("");
  const [results, setResult] = useState<Post[]>([]);
  const onChangePostSearch = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);
  const onClickPostSearch = async (search: string) => {
    const searchData = await getPostsBySearch(search);
    console.log(searchData);
    setResult(searchData);
  };
  return (
    <>
      <div>
        <div className="flex items-center mt-5 gap-1">
          <input placeholder="Search" className="rounded-3xl py-2 px-4 text-white bg-gray-800" value={search} onChange={onChangePostSearch} />
          <div className="hover:bg-gray-700 p-2" onClick={() => onClickPostSearch(search)}>
            <FaSearch className="text-white" />
          </div>
        </div>
        {results.length > 0 ? (
          results.map((result: Post) => (
            <Link key={result?.id} href={`http://localhost:3000/${uid}/posts/${result?.id}`} className="text-white no-underline">
              <div className="border-gray-700 border rounded-lg p-5 hover:bg-gray-700">
                <p className="text-white">{result?.content}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-white">該当結果がありません</div>
        )}
      </div>
    </>
  );
};

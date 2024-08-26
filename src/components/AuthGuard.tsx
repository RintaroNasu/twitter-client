"use client";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

const AuthGuard = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  const { status } = useSession();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (status === "unauthenticated" && pathName !== "/") {
      router.push("/");
    }
  }, [router, status, pathName]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated" || pathName === "/") {
    return children;
  }
};

export default AuthGuard;

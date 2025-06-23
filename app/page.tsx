"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { routes } from "@/constants/path";
import useAuth from "@/hooks/useAuth";
import { setUserInfoCookie } from "@/utils/auth";

const Page = () => {
  const router = useRouter();
  const { getUserStatus } = useAuth();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1); // # 제거
      const params = new URLSearchParams(hash);

      const token = params.get("access_token");
      const refresh = params.get("refresh_token");
      const type = params.get("token_type");

      if (token && refresh && type) {
        setUserInfoCookie({
          access_token: token,
          refresh_token: refresh,
          token_type: type,
        });
        getUserStatus();
        router.push(routes.userPath.hobit.add);
      }
    }
  }, []);

  return <div>로그인 처리 중...</div>;
};

export default Page;

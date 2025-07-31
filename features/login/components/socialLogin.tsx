"use client";

import { IconGoogle } from "@/assets/icons";
import { Button } from "@/components/button";
import useAuth from "@/hooks/useAuth";

const SocialLogin = () => {
  const { handleUserAuthLogin } = useAuth();

  return (
    <div className="mt-7 flex w-full flex-col gap-3">
      <div className="flex items-center justify-center gap-2 text-center">
        <span className="text-sm text-gray-500">or</span>
      </div>

      <Button variant="white" size="medium" isIcon onClick={() => handleUserAuthLogin("google")}>
        <IconGoogle className="h-5 w-5" />
        Google 간편 로그인
      </Button>
    </div>
  );
};

export default SocialLogin;

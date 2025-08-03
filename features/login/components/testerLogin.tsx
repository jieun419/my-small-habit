"use client";

import { Button } from "@/components/button";
import useAuth from "@/hooks/useAuth";

const TesterLogin = () => {
  const { handleUserTesterLogin } = useAuth();

  return (
    <Button variant="normal" size="medium" onClick={handleUserTesterLogin} className="underline">
      회원가입 없이 체험하기
    </Button>
  );
};

export default TesterLogin;

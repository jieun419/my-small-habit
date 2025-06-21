"use client";

import { useRouter } from "next/navigation";

import { ButttonContain, Button } from "@/components/button";
import MainContainer from "@/components/container/mainContainer";
import NotFound from "@/components/notFound";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <MainContainer type="default">
      <NotFound title="페이지를 찾을 수 없어요!" buttonText="다시시도" />
      <ButttonContain>
        <Button variant="secondary" onClick={() => router.push("/")}>
          메인으로 가기
        </Button>
      </ButttonContain>
    </MainContainer>
  );
};

export default NotFoundPage;

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Button, ButttonContain } from "../button";
import MainContainer from "../container/mainContainer";
import NotFound from "../notFound";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <MainContainer type="default">
      <NotFound title={error.message} buttonText="다시시도" onClick={resetErrorBoundary} />
      <ButttonContain>
        <Button variant="secondary" onClick={() => router.push("/")}>
          메인으로 가기
        </Button>
      </ButttonContain>
    </MainContainer>
  );
};

export default ErrorFallback;

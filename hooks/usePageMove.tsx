import { useRouter } from "next/navigation";

interface PageMave {
  path?: string;
  type?: "back" | "forward" | "prefetch" | "push" | "refresh" | "replace";
}

/**
 * page 이동 훅
 * @returns handlePageMove
 */
const usePageMove = () => {
  const router = useRouter();

  const handlePageMove = ({ path, type = "push" }: PageMave) => {
    switch (type) {
      case "back":
        router.back();
        break;

      case "forward":
        router.forward();
        break;

      case "prefetch":
        router.prefetch(path ?? "");
        break;

      case "push":
        router.push(path ?? "");
        break;

      case "refresh":
        router.refresh();
        break;

      case "replace":
        router.replace(path ?? "");
        break;

      default:
        router.push(path ?? "");
        break;
    }
  };

  return { handlePageMove };
};

export default usePageMove;

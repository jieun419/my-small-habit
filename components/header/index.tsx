"use client";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { routes } from "@/constants/path";
import usePageMove from "@/hooks/usePageMove";

import IconElement from "../icon/iconElement";

const Header = () => {
  const pathname = usePathname();
  const { handlePageMove } = usePageMove();

  return (
    <header className="pb-md flex w-full items-center justify-between bg-white">
      <button onClick={() => handlePageMove({ type: "back" })}>
        <IconElement icon={faChevronLeft} />
      </button>

      {pathname === routes.userPath.mypage.root && (
        <Link href={routes.userPath.setting.root} className="font-bold">
          설정
        </Link>
      )}
    </header>
  );
};

export default Header;

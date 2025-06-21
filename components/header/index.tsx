"use client";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

import IconElement from "../icon/iconElement";

const Header = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header className="pb-md flex w-full items-center justify-between bg-white">
      <button onClick={handleBack}>
        <IconElement icon={faChevronLeft} />
      </button>

      <Link href="/settings" className="font-bold">
        설정
      </Link>
    </header>
  );
};

export default Header;

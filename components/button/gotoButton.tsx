"use client";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

import Button from "./baseButton";
import IconElement from "../icon/iconElement";

interface GotoButtonProps {
  text: string;
  href: string;
}

const GotoButton = ({ text, href }: GotoButtonProps) => {
  const router = useRouter();

  return (
    <Button variant="tertiary" onClick={() => router.push(href)} className="justify-between">
      {text}
      <IconElement icon={faChevronRight} />
    </Button>
  );
};

export default GotoButton;

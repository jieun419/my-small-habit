"use client";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

import Button from "./Button";
import IconElement from "../icon/iconElement";

const GotoButton = ({ text, href }: { text: string; href: string }) => {
  const router = useRouter();

  return (
    <Button variant="tertiary" onClick={() => router.push(href)} className="justify-between">
      {text}
      <IconElement icon={faChevronRight} />
    </Button>
  );
};

export default GotoButton;

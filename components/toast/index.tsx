"use client";

import { useEffect, useState } from "react";

import { regesterToast, ToastPosition } from "@/utils/toast";

const Toaster = () => {
  const [msg, setMsg] = useState("");
  const [position, setPositoin] = useState<ToastPosition>("bottom");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    regesterToast((msg: string, position?: ToastPosition) => {
      setMsg(msg);
      setPositoin(position ?? "bottom");
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
        setMsg("");
      }, 1500);
    });
  }, []);

  const getPositionClass = () => {
    switch (position) {
      case "bottom":
        return `bottom-20 ${isVisible ? "translate-y-0 " : "translate-y-40"}`;
      case "top":
        return `top-20 ${isVisible ? "translate-y-0 " : "-translate-y-40"}`;
      default:
        return `bottom-20 ${isVisible ? "translate-y-0 " : "translate-y-40"}`;
    }
  };

  const positionClasses = getPositionClass();

  const combinedClasses = [positionClasses].filter(Boolean).join(" ");

  return (
    <div className={`px-md fixed z-1 w-full transition-all duration-300 ${combinedClasses} `}>
      <div className="flex w-full items-center justify-center rounded-md bg-black/55 px-3 py-4 text-sm text-white">
        {msg}
      </div>
    </div>
  );
};

export default Toaster;

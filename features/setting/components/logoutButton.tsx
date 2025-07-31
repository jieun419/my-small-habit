"use client";

import { handleLogout } from "@/api/auth";

const LogoutButton = () => {
  return (
    <button className="text-sm text-gray-500" onClick={handleLogout}>
      로그아웃 하기
    </button>
  );
};

export default LogoutButton;

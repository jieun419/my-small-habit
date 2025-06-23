import { AuthError } from "@supabase/supabase-js";
import { setCookie } from "cookies-next";

import { ACCESS_TOKEN, REFRESH_TOKEN, TOKEN_TYPE } from "@/constants/auth";
import { AuthTokenInfo } from "@/types/auth";

const setUserInfoCookie = async (tokenInfo: AuthTokenInfo) => {
  setCookie(ACCESS_TOKEN, tokenInfo?.access_token || "");
  setCookie(REFRESH_TOKEN, tokenInfo?.refresh_token || "");
  setCookie(TOKEN_TYPE, tokenInfo?.token_type || "");
};

const getAuthErrorMsg = (error: AuthError) => {
  switch (error.code) {
    case "invalid_credentials":
      return "이메일 또는 비밀번호가 일치하지 않습니다.";
    case "user_already_exists":
      return "이미 존재하는 사용자입니다.";
    default:
      return error.message;
  }
};

export { getAuthErrorMsg, setUserInfoCookie };

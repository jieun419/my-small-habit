import { Provider } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { handleAuthLogin, handleSignIn, handleSignUp } from "@/api/auth";
import { getUserStatus } from "@/api/user";
import { USER_STATUS_KEY } from "@/constants/auth";
import { routes } from "@/constants/path";
import { getAuthErrorMsg } from "@/utils/auth";
import LocalStorage from "@/utils/localStorage";

/**
 * 인증 관련 훅
 * @returns 인증 관련 훅
 */
const useAuth = () => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const resetData = () => {
    setUserInfo({
      name: "",
      email: "",
      password: "",
    });
    setErrorMsg("");
  };

  const saveUserStatus = async () => {
    const data = await getUserStatus();

    LocalStorage.setItem(USER_STATUS_KEY, data);
  };

  /**
   * 회원가입
   * @param e 회원가입 폼 이벤트
   */
  const handleUserSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userInfo.name || !userInfo.email || !userInfo.password) {
      return setErrorMsg("모든 필드를 입력해주세요.");
    }
    if (userInfo.password.length < 8) {
      return setErrorMsg("비밀번호는 8자 이상이어야 합니다.");
    }

    const { data, error } = await handleSignUp({ uesrInfo: userInfo });

    if (error) {
      return setErrorMsg(getAuthErrorMsg(error));
    }

    if (data) {
      router.push(routes.commonPath.auth.callback);
      saveUserStatus();
      resetData();
    }
  };

  /**
   * 로그인
   * @param e 로그인 폼 이벤트
   */
  const handleUserLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userInfo.email || !userInfo.password) {
      return setErrorMsg("모든 필드를 입력해주세요.");
    }

    const { data, error } = await handleSignIn({ uesrInfo: userInfo });

    if (error) {
      return setErrorMsg(getAuthErrorMsg(error));
    }

    if (data) {
      router.push(routes.commonPath.auth.callback);
      saveUserStatus();
      resetData();
    }
  };

  /**
   * 소셜 로그인
   * @param provider 소셜 로그인 프로바이더
   */
  const handleUserAuthLogin = async (provider: Provider) => {
    const { data, error } = await handleAuthLogin(provider);
    if (error) {
      return setErrorMsg(getAuthErrorMsg(error));
    }
    if (data) {
      saveUserStatus();
    }
  };

  return {
    userInfo,
    errorMsg,
    setUserInfo,
    handleUserSignUp,
    handleUserLogin,
    handleUserAuthLogin,
    saveUserStatus,
  };
};

export default useAuth;

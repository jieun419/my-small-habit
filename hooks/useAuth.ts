import { Provider } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { handleAuthLogin, handleSignIn, handleSignUp } from "@/api/auth";
import { getUserStatus } from "@/api/user";
import { USER_STATUS_KEY } from "@/constants/auth";
import { routes } from "@/constants/path";
import { createClient } from "@/lib/supabase/client";
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

  const saveUserStatus = async (userId: string) => {
    const { data: userStatus } = await getUserStatus(userId);

    LocalStorage.setItem(USER_STATUS_KEY, userStatus);
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
      if (data.user) saveUserStatus(data.user?.id);
      resetData();

      router.replace(routes.apiPath.auth.callback);
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
      if (data.user) saveUserStatus(data.user?.id);
      resetData();
      router.replace(routes.apiPath.auth.callback);
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
      const {
        data: { user },
        error,
      } = await createClient().auth.getUser();
      if (user) saveUserStatus(user?.id);
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

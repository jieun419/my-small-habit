import { Provider } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { handleAuthLogin, handleSignIn, handleSignUp } from "@/api/auth";
import { handleGetUserStatus, handleInsertUserInfo } from "@/api/user";
import { USER_STATUS_KEY } from "@/constants/auth";
import { routes } from "@/constants/path";
import { UserInfo } from "@/types/user";
import { getAuthErrorMsg, setUserInfoCookie } from "@/utils/auth";

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
      insertUserInfo({
        id: data.user?.id,
        email: data.user?.email,
        name: data.user?.user_metadata.name,
        created_at: data.user?.created_at,
      });

      setUserInfoCookie({
        access_token: data.session?.access_token,
        refresh_token: data.session?.refresh_token,
        token_type: data.session?.token_type,
      });

      getUserStatus();
      resetData();
      router.push(routes.userPath.habit.add);
    }
  };

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
      setUserInfoCookie({
        access_token: data.session?.access_token,
        refresh_token: data.session?.refresh_token,
        token_type: data.session?.token_type,
      });

      getUserStatus();

      resetData();
      router.push(routes.userPath.habit.add);
    }
  };

  const getUserStatus = async () => {
    const data = await handleGetUserStatus();

    localStorage.setItem(USER_STATUS_KEY, data);
  };

  const handleUserAuthLogin = async (provider: Provider) => {
    const { data, error } = await handleAuthLogin(provider);
    if (error) {
      return setErrorMsg(getAuthErrorMsg(error));
    }

    if (data) {
      router.push(routes.userPath.habit.add);
    }
  };

  const insertUserInfo = async (userInfo: UserInfo) => {
    if (!userInfo) return;
    await handleInsertUserInfo(userInfo);
  };

  return {
    userInfo,
    errorMsg,
    setUserInfo,
    handleUserSignUp,
    handleUserLogin,
    handleUserAuthLogin,
    getUserStatus,
  };
};

export default useAuth;

import { Provider } from "@supabase/supabase-js";

import supabase from "@/lib/supabase";

/**
 * 회원가입
 * @param param0 유저 정보
 * @returns 유저 정보
 */
export const handleSignUp = async ({
  uesrInfo,
}: {
  uesrInfo: { email: string; password: string; name: string };
}) => {
  const { data, error } = await supabase.auth.signUp({
    email: uesrInfo.email,
    password: uesrInfo.password,
    options: {
      data: {
        name: uesrInfo.name,
      },
    },
  });

  return { data, error };
};

/**
 * 로그인
 * @param param0 유저 정보
 * @returns 유저 정보
 */
export const handleSignIn = async ({
  uesrInfo,
}: {
  uesrInfo: { email: string; password: string };
}) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: uesrInfo.email,
    password: uesrInfo.password,
  });

  return { data, error };
};

/**
 * 소셜 로그인
 * @param provider 소셜 로그인 플랫폼
 * @returns 소셜 로그인 플랫폼
 */
export const handleAuthLogin = async (provider: Provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  return { data, error };
};

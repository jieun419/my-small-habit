import { Provider } from "@supabase/supabase-js";

import { routes } from "@/constants/path";
import { createClient } from "@/lib/supabase/client";

/**
 * 회원가입
 * @param uesrInfo 유저 정보
 * @returns 유저 정보
 */
export const handleSignUp = async ({
  uesrInfo,
}: {
  uesrInfo: { email: string; password: string; name: string };
}) => {
  const { data, error } = await createClient().auth.signUp({
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
 * @param uesrInfo 유저 정보
 * @returns 유저 정보
 */
export const handleSignIn = async ({
  uesrInfo,
}: {
  uesrInfo: { email: string; password: string };
}) => {
  const { data, error } = await createClient().auth.signInWithPassword({
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
  const { data, error } = await createClient().auth.signInWithOAuth({
    provider: provider,
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}${routes.apiPath.auth.callback}`,
    },
  });

  return { data, error };
};

export const getSupabase = async () => {
  const { data } = await createClient().auth.getSession();
  return data;
};

import { SUPABASE_DATA_INFO } from "@/constants/auth";
import { createClient } from "@/lib/supabase/client";
import { UserInfo } from "@/types/user";

/**
 * GET supabase 유저 정보 조회
 * @returns 유저 정보
 */
export const getSupabaseUser = async () => {
  const { data, error } = await createClient().auth.getUser();
  return { data, error };
};

/**
 * INSERT 유저 정보 삽입
 * @param userInfo 유저 정보
 * @returns 유저 정보
 */
export const insertUserInfo = async (userInfo: UserInfo) => {
  const { data, error } = await createClient().from(SUPABASE_DATA_INFO.USER_INFO).insert(userInfo);
  return { data, error };
};

/**
 * GET 유저 상태 조회
 * @returns 유저 상태
 */
export const getUserStatus = async () => {
  const { data } = await createClient().from(SUPABASE_DATA_INFO.USER_INFO).select("*").single();
  return data?.status;
};

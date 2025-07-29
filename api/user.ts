import { QueryError } from "@supabase/supabase-js";

import { SUPABASE_DATA_INFO } from "@/constants/auth";
import { createClient } from "@/lib/supabase/client";
import { UserInfo, UserStatus } from "@/types/user";

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
 * UPDATE 유저 정보 업데이트
 * @returns 유저 상태
 */
export const updateUserInfo = async (userId: string, userName: string) => {
  if (!userName) return;

  const { data, error } = await createClient()
    .from(SUPABASE_DATA_INFO.USER_INFO)
    .update({ name: userName })
    .eq("user_id", userId);

  return { data, error };
};

/**
 * GET 유저 정보 조회
 * @param userInfo 유저 정보
 * @returns 유저 정보
 */
export const getUserInfo = async (): Promise<{ data: UserInfo; error: QueryError | null }> => {
  const { data, error } = await createClient()
    .from(SUPABASE_DATA_INFO.USER_INFO)
    .select("*")
    .single();
  return { data, error };
};

/**
 * GET 유저 상태 조회
 * @returns 유저 상태
 */
export const getUserStatus = async (userId: string) => {
  const { data } = await createClient()
    .from(SUPABASE_DATA_INFO.USER_INFO)
    .select("status")
    .eq("user_id", userId)
    .single();
  return data?.status;
};

/**
 * UPDATE 유저 상태 업데이트
 * @returns 유저 상태
 */
export const updateUserStatus = async (userId: string, status: UserStatus) => {
  const { data } = await createClient()
    .from(SUPABASE_DATA_INFO.USER_INFO)
    .update({ status: status })
    .eq("user_id", userId)
    .single();

  return data;
};

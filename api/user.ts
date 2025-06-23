import { SUPABASE_DATA_INFO } from "@/constants/auth";
import supabase from "@/lib/supabase";
import { UserInfo } from "@/types/user";

/**
 * 유저 정보 삽입
 * @param userInfo 유저 정보
 * @returns 유저 정보
 */
export const handleInsertUserInfo = async (userInfo: UserInfo) => {
  const { data, error } = await supabase.from(SUPABASE_DATA_INFO.USER_INFO).insert(userInfo);
  return { data, error };
};

/**
 * 유저 상태 조회
 * @returns 유저 상태
 */
export const handleGetUserStatus = async () => {
  const { data } = await supabase.from(SUPABASE_DATA_INFO.USER_INFO).select("*").single();
  return data?.status;
};

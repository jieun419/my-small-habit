import { User } from "@supabase/supabase-js";

import { SUPABASE_DATA_INFO } from "@/constants/auth";
import { createClient } from "@/lib/supabase/server";
import { UserInfoData } from "@/types/user";

/**
 * GET supabase 유저 정보 조회
 * @returns 유저 정보
 */
export const getSupabaseUser = async (): Promise<User | null> => {
  const { data } = await (await createClient()).auth.getUser();
  return data.user || null;
};

export const getUserInfo = async (): Promise<{ data: UserInfoData }> => {
  const { data } = await (await createClient())
    .from(SUPABASE_DATA_INFO.USER_INFO)
    .select("*")
    .single();

  return data || null;
};

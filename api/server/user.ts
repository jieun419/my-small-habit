import { User } from "@supabase/supabase-js";

import { createClient } from "@/lib/supabase/server";

/**
 * GET supabase 유저 정보 조회
 * @returns 유저 정보
 */
export const getSupabaseUser = async (): Promise<User | null> => {
  const { data } = await (await createClient()).auth.getUser();
  return data.user || null;
};

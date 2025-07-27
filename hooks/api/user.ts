import { useSuspenseQuery } from "@tanstack/react-query";

import { queryKey } from "@/constants/queryKey";
import { createClient } from "@/lib/supabase/client";

const {
  data: { user },
} = await createClient().auth.getUser();

/**
 * GET supabase 유저 정보 조회
 * @returns 유저 정보
 */
export const useGetUser = () => {
  return useSuspenseQuery({
    queryKey: queryKey.user.key(user?.id || ""),
    queryFn: async () => {
      const { data, error } = await createClient().auth.getUser();
      if (error) throw error;
      return data.user;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

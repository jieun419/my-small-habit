import { useSuspenseQuery } from "@tanstack/react-query";

import { getUserStatus } from "@/api/user";
import { queryKey } from "@/constants/queryKey";
import { createClient } from "@/lib/supabase/client";
import LocalStorage from "@/utils/localStorage";

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

/**
 * GET 유저 상태 조회
 * @returns 유저 상태
 */
export const useGetUserInfoStatus = () => {
  return useSuspenseQuery({
    queryKey: queryKey.userInfo.status.key(user?.id || ""),
    queryFn: async () => {
      const data = await getUserStatus();
      LocalStorage.setItem("user_info_status", data);
      return data;
    },
  });
};

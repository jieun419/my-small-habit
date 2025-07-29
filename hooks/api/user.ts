import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getUserInfo, updateUserInfo } from "@/api/user";
import { queryKey } from "@/constants/queryKey";
import { toast } from "@/utils/toast";

/**
 * GET supabase 유저 정보 조회
 * @returns 유저 정보
 */
export const useGetUserInfo = () => {
  return useQuery({
    queryKey: queryKey.userInfo.key,
    queryFn: async () => {
      const { data, error } = await getUserInfo();
      if (error) throw Error("유저 데이터 에러!!", error);
      return data;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

/**
 * Update 유저 정보 업데이트
 * @returns 습관 삽입
 */
export const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();

  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: async ({ userId, userName }: { userId: string; userName: string }) =>
      await updateUserInfo(userId, userName),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey.userInfo.key });
    },
    onError: (error) => {
      toast("의도치 않는 에러가 발생! 다시 시도해 주세요.");
      console.error(error);
    },
  });

  return {
    mutateUpdateUserInfo: mutate,
    isUpdateUserInfoError: isError,
    isUpdateUserInfoSuccess: isSuccess,
  };
};

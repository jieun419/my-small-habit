import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";

import { deleteHabit, getHabitList, InsertHabit, updateHabit } from "@/api/habit";
import { queryKey } from "@/constants/queryKey";
import { createClient } from "@/lib/supabase/client";

const supabase = await createClient();
const {
  data: { user },
} = await supabase.auth.getUser();

/**
 * 습관 목록 조회
 * @returns 습관 목록
 */
export const useGetHabitList = (userId: string) => {
  return useSuspenseQuery({
    queryKey: queryKey.habit.list.key(userId),
    queryFn: async () => {
      const { data, error } = await getHabitList(userId);
      if (error) return [];
      return data;
    },
  });
};

/**
 * 습관 삽입
 * @returns 습관 삽입
 */
export const useInsertHabit = () => {
  const queryClient = useQueryClient();

  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: async (habit: { user_id?: string; name: string }) => await InsertHabit(habit),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey.habit.key(user?.id || "") });
      queryClient.invalidateQueries({ queryKey: queryKey.habit.list.key(user?.id || "") });
    },
    onError: (error) => {
      throw console.error(error);
    },
  });

  return {
    mutateInsertHabit: mutate,
    isInsertHabitError: isError,
    isInsertHabitSuccess: isSuccess,
  };
};

/**
 * 습관 수정
 * @returns 습관 수정
 */
export const useUpdateHabit = () => {
  const queryClient = useQueryClient();

  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: async (habit: { user_id?: string; name: string; id: string }) =>
      await updateHabit(habit),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey.habit.key(user?.id || "") });
      queryClient.invalidateQueries({ queryKey: queryKey.habit.list.key(user?.id || "") });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return {
    mutateUpdateHabit: mutate,
    isUpdateHabitError: isError,
    isUpdateHabitSuccess: isSuccess,
  };
};

/**
 * 습관 삭제
 * @returns 습관 삭제
 */
export const useDeleteHabit = () => {
  const queryClient = useQueryClient();

  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: async (habit: { user_id?: string; id: string }) => await deleteHabit(habit),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey.habit.key(user?.id || "") });
      queryClient.invalidateQueries({ queryKey: queryKey.habit.list.key(user?.id || "") });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return {
    mutateDeleteHabit: mutate,
    isDeleteHabitError: isError,
    isDeleteHabitSuccess: isSuccess,
  };
};

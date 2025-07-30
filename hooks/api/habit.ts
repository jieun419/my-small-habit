import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";

import {
  deleteHabit,
  getHabitList,
  insertHabit,
  insertHabitRecord,
  updateHabit,
} from "@/api/habit";
import { queryKey } from "@/constants/queryKey";
import { createClient } from "@/lib/supabase/client";
import { HabitRecordInsert } from "@/types/habit";
import { toast } from "@/utils/toast";

import { useInserReportDayEmpty } from "./report";

const supabase = await createClient();
const {
  data: { user },
} = await supabase.auth.getUser();

/**
 * GET 습관 목록 조회
 * @returns 습관 목록
 */
export const useGetHabitList = (userId: string) => {
  return useQuery({
    queryKey: queryKey.habit.list.key(userId),
    queryFn: async () => {
      const { data, error } = await getHabitList(userId);
      if (error) return [];
      return data;
    },
  });
};

/**
 * Insert 습관 삽입
 * @returns 습관 삽입
 */
export const useInsertHabit = () => {
  const queryClient = useQueryClient();

  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: async (habit: { user_id?: string; name: string }) => await insertHabit(habit),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey.habit.list.key(user?.id || "") });
    },
    onError: (error) => {
      toast("의도치 않는 에러가 발생! 다시 시도해 주세요.");
      console.error(error);
    },
  });

  return {
    mutateInsertHabit: mutate,
    isInsertHabitError: isError,
    isInsertHabitSuccess: isSuccess,
  };
};

/**
 * UPDATE 습관 수정
 * @returns 습관 수정
 */
export const useUpdateHabit = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (habit: { user_id?: string; name: string; id: string }) =>
      await updateHabit(habit),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey.habit.list.key(user?.id || "") });
    },
    onError: (error) => {
      toast("의도치 않는 에러가 발생! 다시 시도해 주세요.");
      console.error(error);
    },
  });

  return {
    mutateUpdateHabit: mutate,
  };
};

/**
 * DELETE 습관 삭제
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
      toast("의도치 않는 에러가 발생! 다시 시도해 주세요.");
      console.error(error);
    },
  });

  return {
    mutateDeleteHabit: mutate,
    isDeleteHabitError: isError,
    isDeleteHabitSuccess: isSuccess,
  };
};

/**
 * INSERT 습관 기록
 * @returns 습관 기록
 */
export const useUploadHabitRecord = () => {
  const { mutateReportDayEmpty } = useInserReportDayEmpty();

  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: async ({ record, userId }: { record: HabitRecordInsert; userId: string }) =>
      await insertHabitRecord({ record, userId }),
    onSuccess: (data) => {
      // report day empty 데이터 생성
      if (data.data) {
        mutateReportDayEmpty({
          userId: data.data?.user_id ?? "",
          type: "day",
          habitRecord: data.data,
        });
      }
    },
    onError: (error) => {
      toast("의도치 않는 에러가 발생! 다시 시도해 주세요.");
      console.error(error);
    },
  });

  return {
    mutateUploadHabitRecord: mutate,
    isUploadHabitRecordError: isError,
    isUploadHabitRecordSuccess: isSuccess,
  };
};

/**
 * GET 날씨 조회
 * @returns 날씨 아이콘
 */
export const useGetWeather = () => {
  const [city, setCity] = useState("Seoul");
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;

  return useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
      );
      const data = await response.json();

      if (data) {
        return `https://openweathermap.com/img/wn/${data.weather?.[0]?.icon}.png`;
      }
    },
  });
};

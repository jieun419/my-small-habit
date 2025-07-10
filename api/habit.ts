import { PostgrestError, QueryError } from "@supabase/supabase-js";

import { SUPABASE_DATA_INFO } from "@/constants/auth";
import { createClient } from "@/lib/supabase/client";
import { Habit, HabitRecord, HabitRecordInsert } from "@/types/habit";

/**
 * GET 습관 조회
 * @returns 습관
 */
export const getHabitList = async (
  userId: string,
): Promise<{ data: Habit[] | null; error: PostgrestError | null }> => {
  const { data, error } = await createClient()
    .from(SUPABASE_DATA_INFO.HABIT)
    .select("*")
    .order("created_at")
    .eq("user_id", userId);

  return { data, error };
};

/**
 * INSERT 습관 삽입
 * @param habit 습관
 * @returns 습관
 */
export const insertHabit = async (habit: { user_id?: string; name: string }) => {
  const { error } = await createClient().from(SUPABASE_DATA_INFO.HABIT).insert(habit);

  if (error) return { error };
  return { data: true };
};

/**
 * UPDATE 습관 수정
 * @param habit 습관
 * @returns 습관
 */
export const updateHabit = async (habit: { name: string; id: string }) => {
  const { error } = await createClient()
    .from(SUPABASE_DATA_INFO.HABIT)
    .update({ name: habit.name })
    .eq("id", habit.id);

  if (error) return { error };
  return { data: true };
};

/**
 * DELETE 습관 삭제
 * @param habit 습관
 * @returns 습관
 */
export const deleteHabit = async (habit: { id: string }) => {
  const { error } = await createClient().from(SUPABASE_DATA_INFO.HABIT).delete().eq("id", habit.id);

  if (error) return { error };
  return { data: true };
};

/**
 * GET 습관 기록 목록 조회
 * @param userId
 * @returns 습관 기록 목록
 */
export const getHabitRecord = async (userId: string) => {
  const { data, error } = await createClient()
    .from(SUPABASE_DATA_INFO.HABIT_RECORD)
    .select("*")
    .eq("user_id", userId);

  return { data, error };
};

/**
 * INSERT 습관 기록
 * @param record 습관 기록
 * @returns 습관 기록
 */
export const insertHabitRecord = async ({
  record,
  userId,
}: {
  record: HabitRecordInsert;
  userId: string;
}): Promise<{ data: HabitRecord | null; error: QueryError | null }> => {
  const { data, error } = await createClient()
    .from(SUPABASE_DATA_INFO.HABIT_RECORD)
    .insert({ ...record, user_id: userId })
    .select("*"); // post와 동시에 데이터 가져오기

  return { data: data?.[0] ?? null, error };
};

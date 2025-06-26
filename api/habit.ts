import { SUPABASE_DATA_INFO } from "@/constants/auth";
import { createClient } from "@/lib/supabase/client";

/**
 * 습관 조회
 * @returns 습관
 */
export const getHabitList = async () => {
  const { data } = await createClient().from(SUPABASE_DATA_INFO.HABIT).select("*");
  return data;
};

/**
 * 습관 삽입
 * @param habit 습관
 * @returns 습관
 */
export const InsertHabit = async (habit: { user_id?: string; name: string }) => {
  const { error } = await createClient().from(SUPABASE_DATA_INFO.HABIT).insert(habit);
  if (error) {
    return { error };
  }
  return { data: true };
};

/**
 * 습관 수정
 * @param habit 습관
 * @returns 습관
 */
export const updateHabit = async (habit: { name: string; id: string }) => {
  const { error } = await createClient()
    .from(SUPABASE_DATA_INFO.HABIT)
    .update({ name: habit.name })
    .eq("id", habit.id);
  if (error) {
    return { error };
  }
  return { data: true };
};

/**
 * 습관 삭제
 * @param habit 습관
 * @returns 습관
 */
export const deleteHabit = async (habit: { id: string }) => {
  const { error } = await createClient().from(SUPABASE_DATA_INFO.HABIT).delete().eq("id", habit.id);
  if (error) {
    return { error };
  }
  return { data: true };
};

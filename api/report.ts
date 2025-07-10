import { QueryError } from "@supabase/supabase-js";

import { SUPABASE_DATA_INFO } from "@/constants/auth";
import { createClient } from "@/lib/supabase/client";
import { HabitRecord } from "@/types/habit";
import { HabitReport, ReportType } from "@/types/report";

/**
 * INSERT 리포트 빈 데이터 생성 (id, type 만 생성)
 * @param {userId, type, habitRecord}
 * @returns 리포트 데이터 반환
 */
export const insertReportDayEmpty = async ({
  userId,
  type,
  habitRecord,
}: {
  userId: string;
  type: ReportType;
  habitRecord: HabitRecord;
}): Promise<{ data: HabitReport | null; error: QueryError | null }> => {
  const { data, error } = await createClient()
    .from(SUPABASE_DATA_INFO.REPORT)
    .insert({ user_id: userId, report_type: type, habit_record: habitRecord })
    .select("*"); // post와 동시에 데이터 가져오기

  return { data: data?.[0] ?? null, error };
};

/**
 * UPDATE 리포트 text 업데이트
 * @param {userId, type}
 * @returns 리포트 데이터
 */
export const updateReportDay = async ({
  reportId,
  reportText,
}: {
  reportId: string;
  reportText: string;
}): Promise<{ data: HabitReport | null; error: QueryError | null }> => {
  const { data, error } = await createClient()
    .from(SUPABASE_DATA_INFO.REPORT)
    .update({ report_text: reportText })
    .eq("id", reportId)
    .select("*")
    .single();

  return { data: data ?? null, error };
};

/**
 * GET 리포트 데이터 조회
 * @param reportId
 * @returns 리포트 데이터
 */
export const getReportDay = async ({
  reportId,
}: {
  reportId: string;
}): Promise<{ data: HabitReport | null; error: QueryError | null }> => {
  const { data, error } = await createClient()
    .from(SUPABASE_DATA_INFO.REPORT)
    .select("*")
    .eq("id", reportId)
    .single();

  return { data, error };
};

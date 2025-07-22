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

/**
 * GET 리포트 리스트데이터 조회
 * @returns 리포트 리스트 데이터
 */
export const getReportMonthList = async ({
  reportMonth,
}: {
  reportMonth: { userId: string; year: number; month: number };
}): Promise<{ data: HabitReport[] | null; error: QueryError | null }> => {
  const monthStr = String(reportMonth.month).padStart(2, "0");
  const start = `${reportMonth.year}-${monthStr}-01T00:00:00`;

  const nextMonth = reportMonth.month === 12 ? 1 : reportMonth.month + 1;
  const nextYear = reportMonth.month === 12 ? reportMonth.year + 1 : reportMonth.year;
  const nextMonthStr = String(nextMonth).padStart(2, "0");
  const end = `${nextYear}-${nextMonthStr}-01T00:00:00`;

  const { data, error } = await createClient()
    .from(SUPABASE_DATA_INFO.REPORT)
    .select("*")
    .eq("user_id", reportMonth.userId)
    .gte("habit_record->>upload_date", start)
    .lt("habit_record->>upload_date", end);

  return { data: data, error };
};

import { useSuspenseQuery } from "@tanstack/react-query";

import { routes } from "@/constants/path";
import { queryKey } from "@/constants/queryKey";
import { HabitReportSummary } from "@/types/generate";

import { useUpdateReportDay } from "./report";

/**
 * GET 습관 목록 조회
 * @returns 습관 목록
 */
export const useGetHabitSummary = ({
  reportId,
  habitRecord,
  type,
  dateLabel,
  userName,
}: HabitReportSummary) => {
  const { mutateUpdateReportDay } = useUpdateReportDay();

  return useSuspenseQuery({
    queryKey: queryKey.report.generate(reportId ?? "", type),
    queryFn: async () => {
      const res = await fetch(routes.apiPath.generate.report, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reportId, habitRecord, type, dateLabel, userName }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error("AI 리포트를 불러오지 못했습니다.");
      }
      mutateUpdateReportDay({ reportId: reportId ?? "", reportText: data });
      return data;
    },
    retry: 1,
    staleTime: Infinity,
  });
};

import { useQueryClient, useMutation, useSuspenseQuery, useQuery } from "@tanstack/react-query";

import {
  getReportDay,
  getReportMonthList,
  insertReportDayEmpty,
  updateReportDay,
} from "@/api/report";
import { routes } from "@/constants/path";
import { queryKey } from "@/constants/queryKey";
import { HabitRecord } from "@/types/habit";
import { ReportType } from "@/types/report";
import { toast } from "@/utils/toast";

import usePageMove from "../usePageMove";

/**
 * Insert 습관 기록과 동시에 빈 리포트 생성
 * 리포트 id, type만 생성되어 전달 됨
 * @returns report
 */
export const useInserReportDayEmpty = () => {
  const { handlePageMove } = usePageMove();

  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: ({
      userId,
      type,
      habitRecord,
    }: {
      userId: string;
      type: ReportType;
      habitRecord: HabitRecord;
    }) => insertReportDayEmpty({ userId, type, habitRecord }),
    onSuccess: (data) => {
      if (data.data) {
        // report day page로 이동
        handlePageMove({ path: routes.userPath.report.day(data.data?.id ?? "") });
      }
    },
    onError: (error) => {
      toast("의도치 않는 에러가 발생! 다시 시도해 주세요.");
    },
  });

  return {
    mutateReportDayEmpty: mutate,
    isReportEmptyDayError: isError,
    isReportEmptyDaySuccess: isSuccess,
  };
};

/**
 * GET report 데이터 조회
 * @param reportId
 * @returns data
 */
export const useGetReportDay = (reportId: string) => {
  return useSuspenseQuery({
    queryKey: queryKey.report.key(reportId ?? "", "day"),
    queryFn: async () => {
      const { data, error } = await getReportDay({ reportId });
      if (error) throw Error("리포트 Day 에러 발생!!", error);
      return data;
    },
  });
};

/**
 * GET report list month 데이터 조회
 * @param { userId, year, month,}
 * @returns data
 */
export const useGetReportMonthList = ({
  reportMonth,
}: {
  reportMonth: { userId: string; year: number; month: number };
}) => {
  return useQuery({
    queryKey: queryKey.report.list.month(String(reportMonth.year), String(reportMonth.month)),
    queryFn: async () => {
      const { data, error } = await getReportMonthList({ reportMonth });
      if (error) throw Error("리포트 Month 에러 발생!", error);
      return data;
    },
  });
};

/**
 * UPDATE report day report_text 업데이트
 * 리포트 id, type만 생성되어 전달 됨
 * @returns report
 */
export const useUpdateReportDay = () => {
  const queryClient = useQueryClient();

  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: ({ reportId, reportText }: { reportId: string; reportText: string }) =>
      updateReportDay({ reportId, reportText }),
    onSuccess: (data) => {
      if (data.data) {
        queryClient.invalidateQueries({ queryKey: queryKey.report.day(data.data.id) });
      }
    },
    onError: (error) => {
      toast("의도치 않는 에러가 발생! 다시 시도해 주세요.");
    },
  });

  return {
    mutateUpdateReportDay: mutate,
    isUpdateReportDayError: isError,
    isUpdateReportDaySuccess: isSuccess,
  };
};

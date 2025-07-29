import { ReportType } from "@/types/report";

export const queryKey = {
  /* 유저 정보 */
  userInfo: {
    key: ["user_info"],
    status: {
      key: ["user_info_status"],
    },
  },
  /* 습관 */
  habit: {
    key: (userId: string) => ["habit", userId],
    list: {
      key: (userId: string) => ["habit_list", userId],
    },
    detail: {
      key: ["habit_detail"],
    },
  },
  /* 기록 */
  record: {
    key: (recordId: string, type: ReportType) => ["record", recordId, type],
    list: {
      key: ["record_list"],
    },
  },
  /* 리포트 */
  report: {
    key: (reportId: string, type: ReportType) => ["report", reportId, type],
    day: (reportId: string) => ["report_day", reportId],
    month: (reportId: string) => ["report_month", reportId],
    year: (reportId: string) => ["report_year", reportId],
    list: {
      month: (year: string, month: string) => ["report_list", year, month],
    },
    generate: (reportId: string, type: ReportType) => ["generate", reportId, type],
  },
};

import { ReportType } from "@/types/report";

export const queryKey = {
  user: {
    key: ["user"],
  },
  /* 유저 정보 */
  userInfo: {
    key: (userId: string) => ["user_info", userId],
    status: {
      key: (userId: string) => ["user_info_status", userId],
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
      key: ["report_list"],
    },
    generate: (reportId: string, type: ReportType) => ["generate", reportId, type],
  },
};

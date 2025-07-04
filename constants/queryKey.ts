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
    record: ["habit_record"],
    detail: {
      key: ["habit_detail"],
    },
  },
  /* 기록 */
  record: {
    key: ["record"],
    list: {
      key: ["record_list"],
    },
  },
  /* 리포트 */
  report: {
    key: ["report"],
    list: {
      key: ["report_list"],
    },
    detail: {
      key: ["report_detail"],
    },
  },
};

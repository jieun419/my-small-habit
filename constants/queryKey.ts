export const queryKey = {
  user: {
    key: ["user"],
  },
  /* 유저 정보 */
  userInfo: {
    key: ["user_info"],
    status: {
      key: ["user_info_status"],
    },
  },
  /* 습관 */
  habit: {
    key: ["habit"],
    list: {
      key: ["habit_list"],
    },
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

const commonPath = {
  root: "/",
  login: "/login",
  signup: "/signup",
  auth: {
    root: "/auth",
    callback: "/auth/callback",
  },
};

const userPath = {
  mypage: {
    root: "/mypage",
  },
  habit: {
    root: "/habit",
    add: "/habit/add",
    edit: "/habit/edit",
    record: {
      root: (step?: string) => `/habit/record${step ? `?step=${step}` : ""}`,
      result: "/habit/record/result",
    },
  },
  report: {
    root: `/report`,
    day: (report_id: string) => `/report/${report_id}/day`,
    month: (report_id: string) => `/report/${report_id}/month`,
    year: (report_id: string) => `/report/${report_id}/year`,
  },
  setting: {
    root: "/setting",
    profile: "/setting/profile",
    logout: "/setting/logout",
  },
};

export const routes = { commonPath, userPath };

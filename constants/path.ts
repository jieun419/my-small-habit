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
    root: "/report",
    weekly: "/report/weekly",
    monthly: "/report/monthly",
    yearly: "/report/yearly",
  },
  setting: {
    root: "/setting",
    profile: "/setting/profile",
    logout: "/setting/logout",
  },
};

export const routes = { commonPath, userPath };

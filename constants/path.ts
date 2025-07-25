const apiPath = {
  root: "/api",
  auth: {
    root: "/api/auth",
    callback: "/api/auth/callback",
    confirm: "/api/auth/confirm",
  },
  generate: {
    root: "/api/generate",
    report: "/api/generate/report",
  },
};

const commonPath = {
  root: "/",
  login: "/login",
  signup: "/signup",
  auth: {
    root: "/auth",
  },
  error: {
    root: "/error",
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
      root: (upload_date?: string, step?: string) =>
        `/habit/record/${upload_date ? upload_date : new Date().toISOString().slice(0, 10)}${step ? `?step=${step}` : ""}`,
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

export const routes = { apiPath, commonPath, userPath };

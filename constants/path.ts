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
  },
  record: {
    root: "/record",
    step1: "/record/step1",
    step2: "/record/step2",
    step3: "/record/step3",
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

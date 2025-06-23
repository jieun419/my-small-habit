const commonPath = {
  root: "/",
  login: "/login",
  signup: "/signup",
};

const userPath = {
  hobit: {
    root: "/hobit",
    add: "/hobit/add",
    edit: "/hobit/edit",
  },
  record: {
    root: "/record",
    add: "/record/add",
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

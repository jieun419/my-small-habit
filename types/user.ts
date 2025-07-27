export interface UserInfo {
  id?: string;
  email?: string;
  name?: string;
  password?: string;
  created_at?: string;
}

export type UserStatus = "initial" | "basic";

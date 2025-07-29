export interface UserInfo {
  id?: string;
  email?: string;
  name?: string;
  password?: string;
  created_at?: string;
}

export type UserStatus = "initial" | "basic";

export interface UserInfoData {
  user_id: string;
  name: string;
  email: string;
  created_at: string;
  status: UserStatus;
}

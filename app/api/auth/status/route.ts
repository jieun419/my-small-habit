import { updateUserStatus } from "@/api/user";
import { USER_STATUS_KEY } from "@/constants/auth";
import { createClient } from "@/lib/supabase/server";
import { UserStatus } from "@/types/user";
import LocalStorage from "@/utils/localStorage";

export async function POST() {
  const {
    data: { user },
  } = await (await createClient()).auth.getUser();

  const userStatus = LocalStorage.getItem(USER_STATUS_KEY) as UserStatus;

  if (user && userStatus === "initial") {
    await updateUserStatus(user.id, "basic");
    LocalStorage.setItem(USER_STATUS_KEY, "basic");
  }
}

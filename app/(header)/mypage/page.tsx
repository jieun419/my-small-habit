import { getSupabaseUser } from "@/api/server/user";
import MyPageScreen from "@/features/mypage";

const MyPage = async () => {
  const user = await getSupabaseUser();

  return <MyPageScreen userId={user?.id} />;
};

export default MyPage;

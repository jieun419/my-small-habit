import { getUserInfo } from "@/api/server/user";
import ProfileEditScreen from "@/features/profileEdit";

const ProfileEditPage = async () => {
  const { data } = await getUserInfo();

  return <ProfileEditScreen userId={data.user_id as string} />;
};

export default ProfileEditPage;

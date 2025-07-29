import { getSupabaseUser } from "@/api/server/user";
import ProfileEditScreen from "@/features/profileEdit";

const ProfileEditPage = async () => {
  const user = await getSupabaseUser();

  return <ProfileEditScreen userId={user?.id as string} />;
};

export default ProfileEditPage;

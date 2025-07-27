import { getSupabaseUser } from "@/api/server/user";
import HabitEditScreen from "@/features/habitEdit";

const HabitEditPage = async () => {
  const user = await getSupabaseUser();
  return <HabitEditScreen userId={user?.id} />;
};

export default HabitEditPage;

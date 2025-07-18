import { getSupabaseUser } from "@/api/user";
import HabitAddScreen from "@/features/habitAdd";

const HabitAddPage = async () => {
  const user = await getSupabaseUser();

  return <HabitAddScreen userId={user?.id} />;
};

export default HabitAddPage;

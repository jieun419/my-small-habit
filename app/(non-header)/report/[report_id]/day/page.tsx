import { getSupabaseUser } from "@/api/server/user";
import ReportDayScreen from "@/features/reportDay";

const ReportDayPage = async () => {
  const user = await getSupabaseUser();

  return <ReportDayScreen userName={user?.user_metadata.name} />;
};

export default ReportDayPage;

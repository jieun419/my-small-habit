import { getSupabaseUser } from "@/api/user";
import HabitRecordScreen from "@/features/habitRecord";

const RecordPage = async ({ params }: { params: Promise<{ upload_date: string }> }) => {
  const { upload_date } = await params;

  const user = await getSupabaseUser();

  return <HabitRecordScreen userId={user?.id} uploadDate={upload_date} />;
};

export default RecordPage;

"use client";

import HabitRecordScreen from "@/features/habitRecord";
import { useGetUser } from "@/hooks/useGetUser";

const RecordPage = () => {
  const { user } = useGetUser();

  return <HabitRecordScreen userId={user?.id} />;
};

export default RecordPage;

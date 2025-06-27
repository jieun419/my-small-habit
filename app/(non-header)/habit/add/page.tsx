"use client";

import HabitAddScreen from "@/features/habitAdd";
import { useGetUser } from "@/hooks/useGetUser";

const HabitAddPage = () => {
  const { user } = useGetUser();

  return <HabitAddScreen userId={user?.id} />;
};

export default HabitAddPage;

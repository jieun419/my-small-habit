import ScreenContainer from "@/components/container/screenContainer";
import CircleTitle from "@/components/title/circleTitle";
import Title from "@/components/title/title";

import HabitCreateFormSection from "./components/habitCreateFormSection";
import HabitListSection from "./components/habitListSection";

interface HabitEditScreenProps {
  userId?: string;
}

const HabitEditScreen = ({ userId }: HabitEditScreenProps) => {
  return (
    <ScreenContainer isBottomButton>
      <CircleTitle>
        <Title size="text-xl">작은 습관을 만들어 봐요!</Title>
      </CircleTitle>
      <HabitCreateFormSection userId={userId} />
      <HabitListSection userId={userId} />
    </ScreenContainer>
  );
};

export default HabitEditScreen;

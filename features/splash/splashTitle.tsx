import CircleTitle from "../../components/title/circleTitle";
import SubTitle from "../../components/title/subTitle";
import Title from "../../components/title/title";

const SplashTitle = () => {
  return (
    <CircleTitle>
      <SubTitle color="text-white">나의 작은 습관 만들기</SubTitle>
      <Title size="text-3xl" color="text-white">
        My Small Habit
      </Title>
    </CircleTitle>
  );
};

export default SplashTitle;

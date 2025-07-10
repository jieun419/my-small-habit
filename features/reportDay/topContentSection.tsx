import { IconMood5VeryHappy } from "@/assets/icons";
import CircleTitle from "@/components/title/circleTitle";
import SubTitle from "@/components/title/subTitle";
import Title from "@/components/title/title";

const TopContentSection = () => {
  return (
    <>
      <div className="absolute top-0 left-0 -z-1 h-[60%] w-full bg-gray-900 pb-10" />
      <div className="pb-sm flex w-full flex-col items-center">
        <CircleTitle>
          <Title color="text-white" size="text-xl">
            오늘도 알찬 하루를 보냈네요!
          </Title>
        </CircleTitle>
        <div className="flex flex-col items-center gap-5">
          <IconMood5VeryHappy className="h-full w-full *:h-[100px] *:w-[100px]" />

          <SubTitle color="text-white" size="text-lg">
            오늘의 리포트예요!
          </SubTitle>
        </div>
      </div>
    </>
  );
};

export default TopContentSection;

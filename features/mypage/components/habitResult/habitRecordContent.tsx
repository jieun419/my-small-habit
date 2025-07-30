import BaseBox from "@/components/box/baseBox";
import Title from "@/components/title/title";
import { HabitRecord } from "@/types/habit";

const HabitRecordContent = ({ habitRecord }: { habitRecord: HabitRecord }) => {
  return (
    <>
      <div>
        <Title>
          완료한 습관
          <span className="rounded-full bg-gray-900 px-2 py-0.5 text-xs text-white">
            {habitRecord.done_habits.length}
          </span>
        </Title>

        <div className="flex flex-col gap-1">
          {habitRecord.done_habits.map((item) => (
            <BaseBox key={item.id} variant="tertiary" align="between" size="medium">
              {item.name}
            </BaseBox>
          ))}
        </div>
      </div>
      <div>
        <Title>회고</Title>
        <div className="text-[14px] leading-6 text-gray-500">{habitRecord.retrospect_text}</div>
      </div>
    </>
  );
};

export default HabitRecordContent;

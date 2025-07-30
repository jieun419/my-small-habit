import { HabitRecord } from "../..";
import RecordRetrospectFile from "./recordRetrospectFile";
import RecordRetrospectText from "./recordRetrospectText";

interface RecordRetrospectProps {
  retrospectFiles: string[] | [];
  retrospectText: string;
  habitRecord: HabitRecord;
  upDateHabitRecord: (habitRecord: Partial<HabitRecord>) => void;
}

const RecordRetrospectSection = ({
  retrospectFiles,
  retrospectText,
  habitRecord,
  upDateHabitRecord,
}: RecordRetrospectProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <RecordRetrospectFile
        retrospectFiles={retrospectFiles}
        habitRecord={habitRecord}
        upDateHabitRecord={upDateHabitRecord}
      />

      <RecordRetrospectText retrospectText={retrospectText} upDateHabitRecord={upDateHabitRecord} />
    </div>
  );
};

export default RecordRetrospectSection;

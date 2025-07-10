import ReportContainer from "@/components/container/reportContainer";
import MarkDownViewer from "@/components/mdx/markDownViewer";
import { useGetHabitSummary } from "@/hooks/api/generate";
import { useGetUser } from "@/hooks/useGetUser";
import { HabitRecord } from "@/types/habit";

interface GenerateReportSection {
  reportId: string;
  habitRecord: HabitRecord | null;
}

const GenerateReportSection = ({ reportId, habitRecord }: GenerateReportSection) => {
  const cureentDate = new Date();
  const { user } = useGetUser();

  const { data: generateSummary } = useGetHabitSummary({
    reportId: String(reportId),
    habitRecord: habitRecord ?? null,
    type: "day",
    dateLabel: String(cureentDate),
    userName: user?.user_metadata.full_name ?? "",
  });

  return (
    <ReportContainer>
      <MarkDownViewer markdownContent={String(generateSummary)} />
    </ReportContainer>
  );
};

export default GenerateReportSection;

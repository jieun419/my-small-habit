import ReportContainer from "@/components/container/reportContainer";
import MarkDownViewer from "@/components/mdx/markDownViewer";
import { useGetHabitSummary } from "@/hooks/api/generate";
import { HabitRecord } from "@/types/habit";

interface GenerateReportSection {
  reportId: string;
  habitRecord: HabitRecord | null;
  userName: string;
}

const GenerateReportSection = ({ reportId, habitRecord, userName }: GenerateReportSection) => {
  const cureentDate = new Date();

  const { data: generateSummary } = useGetHabitSummary({
    reportId: String(reportId),
    habitRecord: habitRecord ?? null,
    type: "day",
    dateLabel: String(cureentDate),
    userName: userName ?? "",
  });

  return (
    <ReportContainer>
      <MarkDownViewer markdownContent={String(generateSummary)} />
    </ReportContainer>
  );
};

export default GenerateReportSection;

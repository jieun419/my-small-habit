import MarkDownViewer from "@/components/mdx/markDownViewer";

const HabitReportContent = ({ habitReportText }: { habitReportText: string }) => {
  return <MarkDownViewer markdownContent={habitReportText}></MarkDownViewer>;
};

export default HabitReportContent;

import { Button } from "@/components/button";

interface ContentButtonSectionProps {
  currentTabView: "record" | "report";
  setCurrentTabView: React.Dispatch<React.SetStateAction<"record" | "report">>;
}

const ContentButtonSection = ({ currentTabView, setCurrentTabView }: ContentButtonSectionProps) => {
  return (
    <div className="flex items-center gap-1">
      <Button
        variant={currentTabView === "record" ? "secondary" : "tertiary"}
        size="small"
        w="w-fit"
        onClick={() => setCurrentTabView("record")}>
        습관 기록
      </Button>
      <Button
        variant={currentTabView === "report" ? "secondary" : "tertiary"}
        size="small"
        w="w-fit"
        onClick={() => setCurrentTabView("report")}>
        리포트
      </Button>
    </div>
  );
};

export default ContentButtonSection;

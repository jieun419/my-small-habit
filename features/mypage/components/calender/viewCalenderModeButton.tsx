import { Button } from "@/components/button";

import { ViewMode } from "../habitCalenderSection";

interface ViewCalenderModeButtonProps {
  viewMode: ViewMode;
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
}

const ViewCalenderModeButton = ({ viewMode, setViewMode }: ViewCalenderModeButtonProps) => {
  return (
    <div className="my-[15px] flex justify-center">
      <Button
        variant="tertiary"
        size="small"
        w="w-fit"
        onClick={() => setViewMode((prev) => (prev === "week" ? "month" : "week"))}>
        {viewMode === "week" ? "월간 보기" : "주간 보기"}
      </Button>
    </div>
  );
};

export default ViewCalenderModeButton;

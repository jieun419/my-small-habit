import React from "react";

import MarkDownViewer from "@/components/mdx/markDownViewer";

const HabitReportSection = ({ habitReportText }: { habitReportText: string }) => {
  return <MarkDownViewer markdownContent={habitReportText}></MarkDownViewer>;
};

export default HabitReportSection;

"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";

import ReportContainer from "@/components/container/reportContainer";
import ScreenContainer from "@/components/container/screenContainer";
import FullScreenLoading from "@/components/loading/fullScreenLoading";
import MarkDownViewer from "@/components/mdx/markDownViewer";
import { useGetReportDay } from "@/hooks/api/report";

import ButtonSection from "./buttonSection";
import AIGenerateReportSection from "./generateReportSection";
import TopContentSection from "./topContentSection";

const ReportDayScreen = ({ userName }: { userName: string }) => {
  const params = useParams();
  const reportId = params.report_id;

  const { data: reportData } = useGetReportDay(reportId as string);

  if (reportData?.report_text) {
    return (
      <ScreenContainer>
        <TopContentSection />
        <ReportContainer>
          <MarkDownViewer markdownContent={String(reportData?.report_text)} />
        </ReportContainer>
        <ButtonSection />
      </ScreenContainer>
    );
  }

  return (
    <Suspense fallback={<FullScreenLoading />}>
      <ScreenContainer>
        <TopContentSection />
        <AIGenerateReportSection
          reportId={reportId as string}
          habitRecord={reportData?.habit_record ?? null}
          userName={userName}
        />
        <ButtonSection />
      </ScreenContainer>
    </Suspense>
  );
};

export default ReportDayScreen;

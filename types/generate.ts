import { HabitRecord } from "./habit";
import { ReportType } from "./report";

export interface HabitReportSummary {
  reportId: string | null;
  habitRecord: HabitRecord | null;
  type: ReportType;
  dateLabel: string;
  userName: string | null;
}

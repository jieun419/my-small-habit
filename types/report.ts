import { HabitRecord } from "./habit";

export type ReportType = "day" | "month" | "year";

export interface HabitReport {
  id: string;
  user_id: string;
  report_type: ReportType;
  report_text: string | null;
  report_email_sent: boolean;
  created_at: string;
  habit_record: HabitRecord | null;
}

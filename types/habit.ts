export interface Habit {
  id: string;
  name: string;
  user_id: string;
  is_done: boolean;
  created_at: string;
}

export type HabitMood =
  | "verySad"
  | "slightlySad"
  | "neutral"
  | "slightlyHappy"
  | "veryHappy"
  | "none";

export interface HabitRecord {
  id: string;
  user_id: string;
  habit_id: string;
  done_habits: Habit[];
  mood: HabitMood | null;
  retrospect_text: string;
  retrospect_image_url: string[];
  created_at: string;
  is_done: boolean;
  upload_date: string;
}

export interface HabitRecordInsert {
  done_habits: Habit[];
  mood: HabitMood | null;
  retrospect_text: string;
  retrospect_image_url: string[] | null;
  is_done: boolean;
  upload_date: string;
}

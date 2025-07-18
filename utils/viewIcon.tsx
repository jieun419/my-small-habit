import {
  IconMood1VerySad,
  IconMood2SlightlySad,
  IconMood3Neutral,
  IconMood4SlightlyHappy,
  IconMood5VeryHappy,
  IconNotFound,
} from "@/assets/icons";
import IconMoodNone from "@/assets/icons/icon-mood-none";
import { HabitMood } from "@/types/habit";

export const getEmotionIcon = ({
  iconMoodType,
  size,
}: {
  iconMoodType?: HabitMood;
  size?: string;
}) => {
  switch (iconMoodType) {
    case "verySad":
      return <IconMood1VerySad size={size} />;
    case "slightlySad":
      return <IconMood2SlightlySad size={size} />;
    case "neutral":
      return <IconMood3Neutral size={size} />;
    case "slightlyHappy":
      return <IconMood4SlightlyHappy size={size} />;
    case "veryHappy":
      return <IconMood5VeryHappy size={size} />;
    case "none":
      return <IconNotFound size={size} />;
    default:
      return <IconMoodNone size={size} />;
  }
};

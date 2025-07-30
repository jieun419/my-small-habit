"use client";

import { useState } from "react";

import { HabitRecord } from "../..";
const MAX_RETROSPECT_LENGTH = 300;

interface RecordRetrospectTextProps {
  retrospectText: string;
  upDateHabitRecord: (habitRecord: Partial<HabitRecord>) => void;
}

const RecordRetrospectText = ({ retrospectText, upDateHabitRecord }: RecordRetrospectTextProps) => {
  const [recordText, setRecordText] = useState(retrospectText);

  return (
    <section className="flex w-full flex-col items-end gap-1">
      <textarea
        name="retrospect_text"
        id="retrospect_text"
        className="h-full min-h-[200px] w-full resize-none rounded-md border border-solid border-gray-500 p-2 text-sm"
        placeholder="그날의 회고를 작성해 보세요."
        minLength={0}
        maxLength={MAX_RETROSPECT_LENGTH}
        value={recordText}
        onChange={(e) => setRecordText(e.currentTarget.value)}
        onBlur={() => upDateHabitRecord({ retrospectText: recordText })}
      />
      <span className="text-xs text-gray-400">
        {recordText.length} / {MAX_RETROSPECT_LENGTH}
      </span>
    </section>
  );
};

export default RecordRetrospectText;

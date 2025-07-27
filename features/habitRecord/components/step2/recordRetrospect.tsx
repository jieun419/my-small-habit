import { faClose } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRef, useState } from "react";

import AddButton from "@/components/button/addButton";
import IconElement from "@/components/icon/iconElement";

import { HabitRecord } from "../..";

interface RecordRetrospectProps {
  fileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteRetrospectFile: (fileUrl: string) => void;
  upDateHabitRecord: (habitRecord: Partial<HabitRecord>) => void;
  retrospectFiles: string[] | [];
  retrospectText: string;
}

const RecordRetrospect = ({
  fileChange,
  deleteRetrospectFile,
  upDateHabitRecord,
  retrospectFiles,
  retrospectText,
}: RecordRetrospectProps) => {
  const MAX_RETROSPECT_LENGTH = 300;
  const MAX_IMG_W = 78;

  const fileRef = useRef<HTMLInputElement>(null);
  const [recordText, setRecordText] = useState(retrospectText);

  const handleFileClick = () => {
    fileRef.current?.click();
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <section className="flex w-full flex-col items-end gap-1">
        <div className="flex w-full gap-1">
          <input
            ref={fileRef}
            type="file"
            name="file-upload"
            id="file-upload"
            className="hidden"
            accept="image/*"
            multiple
            onChange={fileChange}
          />

          <AddButton
            className="flex aspect-square max-w-[80px] items-center justify-center"
            onClick={handleFileClick}
          />
          <div className="w-full overflow-y-scroll">
            <div
              className="flex h-full w-full gap-1"
              style={{ minWidth: `${MAX_IMG_W * retrospectFiles.length + 15}px` }}>
              {retrospectFiles.map((img, idx) => (
                <div
                  key={img}
                  className="relative aspect-square overflow-hidden rounded-md border-[1px] border-solid border-gray-300">
                  <button
                    className="absolute top-1 right-1 z-1 flex aspect-square h-5 w-5 items-center justify-center rounded-full bg-black/30 p-1.5 text-white"
                    onClick={() => deleteRetrospectFile(img)}>
                    <IconElement icon={faClose} className="w-full" />
                  </button>
                  <Image src={img} alt={`thubnail-${idx}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default RecordRetrospect;

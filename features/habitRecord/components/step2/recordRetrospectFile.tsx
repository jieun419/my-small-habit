"use client";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRef } from "react";

import { AddButton } from "@/components/button";
import IconElement from "@/components/icon/iconElement";
import { toast } from "@/utils/toast";

import { HabitRecord } from "../..";

const MAX_IMG_W = 78;
const MAX_RETROSPECT_FILE = 4;

interface RecordRetrospectFileProps {
  retrospectFiles: string[] | [];
  habitRecord: HabitRecord;
  upDateHabitRecord: (habitRecord: Partial<HabitRecord>) => void;
}

const RecordRetrospectFile = ({
  retrospectFiles,
  habitRecord,
  upDateHabitRecord,
}: RecordRetrospectFileProps) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      if (
        files?.length > MAX_RETROSPECT_FILE ||
        files?.length + (habitRecord.retrospectFiles?.length ?? 0) > MAX_RETROSPECT_FILE
      ) {
        return toast("최대 4개 업로드 가능합니다.");
      }

      for (let i = 0; i < files?.length; i++) {
        const currentImageUrl = URL.createObjectURL(files[i]);

        upDateHabitRecord({ retrospectFiles: [currentImageUrl] });
      }
    }
  };

  const deleteRetrospectFile = (fileUrl: string) => {
    if (!habitRecord.retrospectFiles) return;
    const upDateFiles = habitRecord.retrospectFiles.filter((el) => el !== fileUrl);
    upDateHabitRecord({ retrospectFiles: upDateFiles });
  };

  const handleFileClick = () => {
    fileRef.current?.click();
  };

  return (
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
  );
};

export default RecordRetrospectFile;

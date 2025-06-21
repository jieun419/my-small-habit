import AddButton from "@/components/button/addButton";

interface RecordReviewProps {
  fileRef: React.RefObject<HTMLInputElement>;
}

const RecordReview = ({ fileRef }: RecordReviewProps) => {
  const handleFileClick = () => {
    fileRef.current?.click();
  };

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    console.log(file);
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex gap-2">
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
        <button className="button-tertiary max-w-[80px]"></button>
      </div>
      <div className="w-full">
        <textarea
          name=""
          id=""
          className="sh-[200px] w-full resize-none rounded-md border border-solid border-gray-500 p-4"></textarea>
      </div>
    </div>
  );
};

export default RecordReview;

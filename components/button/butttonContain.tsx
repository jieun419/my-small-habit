interface ButttonContainProps {
  children: React.ReactNode;
  isColumn?: boolean;
  isFixed?: boolean;
}

const ButttonContain = ({ children, isColumn = false, isFixed = false }: ButttonContainProps) => {
  return (
    <div
      className={`flex w-full max-w-(--max-width) bg-white pt-[30px] pb-[20px] ${isFixed ? "fixed bottom-0 px-[20px]" : ""} ${
        isColumn ? "flex-col gap-2" : "justify-between gap-4"
      }`}>
      {children}
    </div>
  );
};

export default ButttonContain;

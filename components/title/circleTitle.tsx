interface CircleTitleProps {
  children: React.ReactNode;
}

const CircleTitle = ({ children }: CircleTitleProps) => {
  return (
    <div className="mt-[50px] mb-[64px] flex flex-col items-center justify-center gap-2">
      <div className="circle-primary-icon" />
      <div className="flex flex-col items-center justify-center">{children}</div>
    </div>
  );
};

export default CircleTitle;

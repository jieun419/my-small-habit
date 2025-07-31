interface ScreenContainerProps {
  children: React.ReactNode;
  isBottomButton?: boolean;
}

const ScreenContainer = ({ children, isBottomButton }: ScreenContainerProps) => {
  return (
    <div
      className={`flex w-full flex-col items-center overflow-y-auto ${isBottomButton ? "pb-[100px]" : ""}`}>
      {children}
    </div>
  );
};

export default ScreenContainer;

interface ScreenContainerProps {
  children: React.ReactNode;
  isBottomButton?: boolean;
}

const ScreenContainer = ({ children, isBottomButton = false }: ScreenContainerProps) => {
  return (
    <div className={`flex w-full flex-col items-center ${isBottomButton ? "pb-[100px]" : ""}`}>
      {children}
    </div>
  );
};

export default ScreenContainer;

interface MainContainerProps {
  children: React.ReactNode;
  type: "splash" | "default";
  isBottomButton?: boolean;
}

const MainContainer = ({ children, type, isBottomButton = false }: MainContainerProps) => {
  return (
    <main
      className={`relative z-1 mx-auto h-screen max-w-(--max-width) overflow-y-auto ${
        isBottomButton ? "pb-[140px]" : ""
      } ${type === "splash" ? "bg-gray-900" : "px-lg py-md bg-white"}`}>
      {children}
    </main>
  );
};

export default MainContainer;

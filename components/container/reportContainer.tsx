interface ReportContainerProps {
  children: React.ReactNode;
}

const ReportContainer = ({ children }: ReportContainerProps) => {
  return (
    <section className="flex w-full flex-col gap-4">
      <div className="min-h-[200px] w-full rounded-md border border-solid border-gray-500 bg-white p-4">
        {children}
      </div>
    </section>
  );
};

export default ReportContainer;

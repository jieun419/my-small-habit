import MainContainer from "@/components/container/mainContainer";
import Header from "@/components/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainContainer type="default">
      <Header />
      {children}
    </MainContainer>
  );
};

export default Layout;

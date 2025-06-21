import MainContainer from "@/components/container/mainContainer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <MainContainer type="default">{children}</MainContainer>;
};

export default Layout;

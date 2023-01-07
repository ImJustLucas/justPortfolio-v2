import { Menu } from "../components/Menu";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Menu />
      <div>{children}</div>
    </>
  );
};

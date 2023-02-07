import styled from "styled-components";

import { Menu } from "@components/Menu";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Menu />
      <ScreenContainer>{children}</ScreenContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const ScreenContainer = styled.div`
  height: 100vh;
  background-color: #fff;
  flex: 1;
`;

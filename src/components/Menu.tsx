import styled from "styled-components";

import { NavBar } from "@components/NavBar";
import { IconRow } from "@components/IconRow";
import { PresenceBlock } from "@components/PresenceBlock";

export const Menu = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Lucas.</Title>
      </TitleContainer>
      <NavBar />
      <PresenceBlock />
      <IconRow />
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
  max-width: 370px;
  height: calc(100vh - 40px);
  background-color: var(--color-lightblue);
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px 0 20px;
`;

const Title = styled.h1`
  font-family: "Cormorant Unicase", serif;
  font-size: 5rem;
  text-transform: uppercase;
  color: var(--color-dark);
`;

const Separator = styled.hr`
  width: 80%;
  size: 1px;
  margin: 20px auto;
`;

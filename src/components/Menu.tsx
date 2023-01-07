import styled from "styled-components";

import { NavBar } from "@components/NavBar";

export const Menu = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Lucas.</Title>
      </TitleContainer>
      <NavBar />
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
  height: 100vh;
  background-color: var(--color-lightblue);
  padding: 40px 0;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-family: "Cormorant Unicase", serif;
  font-size: 5rem;
  text-transform: uppercase;
  color: var(--color-dark);
`;

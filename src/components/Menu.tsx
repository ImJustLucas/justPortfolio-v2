import { useState } from "react";
import styled from "styled-components";

import { NavBar } from "@components/NavBar";
import { IconRow } from "@components/IconRow";
import { PresenceBlock } from "@components/PresenceBlock";
import { CrossIcon } from "@components/Icons/CrossIcon";
import { BurgerIcon } from "@components/Icons/BurgerIcon";

export const Menu = () => {
  const [openOnMobile, setOpenOnMobile] = useState<Boolean>(false);

  const toggleMobileMenu = () => {
    setOpenOnMobile(!openOnMobile);
    console.log(openOnMobile);
  };

  return (
    <>
      <MobileHeader>
        {openOnMobile ? (
          <CrossIcon onClick={toggleMobileMenu} />
        ) : (
          <BurgerIcon onClick={toggleMobileMenu} />
        )}
      </MobileHeader>
      <Container openOnMobile={openOnMobile}>
        <TitleContainer>
          <Title>Lucas.</Title>
        </TitleContainer>
        <NavBar />
        <PresenceBlock />
        <IconRow />
      </Container>
    </>
  );
};

const Container = styled.div<{ openOnMobile: Boolean }>`
  width: 30%;
  max-width: 370px;
  height: calc(100vh - 40px);
  background-color: var(--color-lightblue);
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    display: ${({ openOnMobile }) => (openOnMobile ? "flex" : "none")};
    position: fixed;
    min-width: 100vw;
    border-radius: 0;
  }
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

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3rem;
  }
`;

const MobileHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  width: 100%;
  height: 65px;
  flex-shrink: 0;
  z-index: 1;
  svg {
    margin-left: auto;
    cursor: pointer;
    color: var(--color-darkblue);
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

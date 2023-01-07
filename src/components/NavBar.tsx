import styled from "styled-components";

import { NavItem } from "@components/NavItem";

export const NavBar = () => {
  return (
    <Navbar>
      <NavItem link="/" name="me" />
      <NavItem link="/about" name="all my works" />
      <NavItem link="/tech" name="tech i use" />
      <NavItem link="/contact" name="contact me" />
    </Navbar>
  );
};

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
`;

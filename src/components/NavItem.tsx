import Link from "next/link";

import styled from "styled-components";

type NavItem = {
  link: "/" | "/about" | "/tech" | "/contact";
  name: string;
};

export const NavItem = ({ link, name }: NavItem) => {
  return (
    <NavItemContaier>
      <Link href={link} passHref>
        <StyledLink>{name}</StyledLink>
      </Link>
    </NavItemContaier>
  );
};

const NavItemContaier = styled.div`
  height: 60px;
  display: flex;
  flex-direction: center;
  justify-content: center;
`;

const StyledLink = styled.a`
  font-size: 1.5rem;
  family: "Inter", sans-serif;
`;

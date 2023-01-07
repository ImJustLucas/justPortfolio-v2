import Link from "next/link";
import { useRouter } from "next/router";

import styled from "styled-components";

type NavItem = {
  link: "/" | "/about" | "/tech" | "/contact";
  name: string;
};

export const NavItem = ({ link, name }: NavItem) => {
  const router = useRouter();

  return (
    <NavItemContaier className={router.pathname == link ? "active" : ""}>
      <NavLink href={link} passHref>
        {name}
      </NavLink>
    </NavItemContaier>
  );
};

const NavLink = styled(Link)`
  font-size: 1.5rem;
  font-family: "Inter", sans-serif;
  text-decoration: none;
  color: var(--color-dark);
  line-height: 60px;
  vertical-align: baseline;
`;

const NavItemContaier = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: center;
  justify-content: center;

  &.active {
    border-right: 3px solid var(--color-darkblue);
  }
`;

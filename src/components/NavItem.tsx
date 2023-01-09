import Link from "next/link";
import styled from "styled-components";

import { LinkPathName } from "@typesDef/link";
import useSound from "use-sound";

type NavItem = {
  link: LinkPathName;
  name: string;
};

export const NavItem = ({ link, name }: NavItem) => {
  const [playClickSound] = useSound("/sounds/type.wav");

  const handleClick = () => {
    playClickSound();
  };
  return (
    <NavItemContaier onClick={handleClick}>
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
`;

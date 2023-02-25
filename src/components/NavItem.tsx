import Link from 'next/link'
import styled from 'styled-components'

import { LinkPathName } from '@typesDef/link'
import useSound from 'use-sound'

type NavItemProps = {
  link: LinkPathName
  name: string
  handleMenu?: () => void
}

export const NavItem = ({ link, name, handleMenu }: NavItemProps) => {
  const [playClickSound] = useSound('/sounds/type.wav')

  const handleClick = () => {
    playClickSound()
    handleMenu && handleMenu()
  }
  return (
    <NavItemContaier onClick={handleClick}>
      <NavLink href={link} passHref>
        {name}
      </NavLink>
    </NavItemContaier>
  )
}

const NavLink = styled(Link)`
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  color: var(--color-dark);
  line-height: 60px;
  vertical-align: baseline;
`

const NavItemContaier = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: center;
  justify-content: center;
`

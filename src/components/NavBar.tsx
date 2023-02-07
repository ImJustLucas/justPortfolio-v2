import styled from 'styled-components'
import { useRouter } from 'next/router'

import { NavItem } from '@components/NavItem'

export const NavBar = () => {
  const router = useRouter()
  const page = router.pathname
  let activePath: string = '0'

  switch (page) {
    case '/' || null:
      activePath = '0'
      break
    case '/about':
      activePath = '60'
      break
    case '/tech':
      activePath = '120'
      break
    case '/contact':
      activePath = '180'
      break
  }

  return (
    <Navbar activePath={activePath}>
      <NavItem link="/" name="me" />
      <NavItem link="/about" name="all my works" />
      <NavItem link="/tech" name="tech i use" />
      <NavItem link="/contact" name="contact me" />
    </Navbar>
  )
}

const Navbar = styled.nav<{ activePath?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 60px;
    border-right: 3px solid var(--color-darkblue);
    top: ${({ activePath }) => activePath}px;
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
    &::before {
      display: none;
    }
  }
`

import styled from 'styled-components'

import { Menu } from '@components/Menu'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Menu />
      <ScreenContainer>{children}</ScreenContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const ScreenContainer = styled.div`
  height: 100vh;
  background-color: #fff;
  flex: 1;
  margin-left: 30%;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

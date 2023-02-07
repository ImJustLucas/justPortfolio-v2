import styled from 'styled-components'

import { GithubIcon } from '@components/Icons/Github'
import { TwitterIcon } from '@components/Icons/Twitter'
import { LinkedinIcon } from '@components/Icons/LinkedIn'
import { InstagramIcon } from '@components/Icons/Instagram'

import COLORS from '@constants/colors'

export const IconRow = () => {
  return (
    <Container>
      <GithubIcon color={COLORS.DARKBLUE} />
      <TwitterIcon color={COLORS.DARKBLUE} />
      <LinkedinIcon color={COLORS.DARKBLUE} />
      <InstagramIcon color={COLORS.DARKBLUE} />
    </Container>
  )
}

//add this section to them bottom of the parent component

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
`

import styled from 'styled-components'

import { TechRow } from '@components/Tech/TechRow'
import Technologies from '@data/technologies'

export default function Tech() {
  return (
    <TechContainer>
      <TitleSection>How i create</TitleSection>
      {Technologies.map((technologie, index) => (
        <TechRow key={index} technologie={technologie} />
      ))}
    </TechContainer>
  )
}

const TechContainer = styled.div`
  padding: 70px 100px 0 70px;

  @media (max-width: 768px) {
    padding: 70px 50px 0 50px;
  }
`
const TitleSection = styled.h2`
  font-size: 42px;
  font-family: 'Cormorant Unicase', serif;
  font-weight: 400;
  font-style: normal;
  line-height: 50px;
  margin-bottom: 80px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`

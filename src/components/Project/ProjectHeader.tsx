import Image from 'next/image'
import styled from 'styled-components'

import { ProjectHeaderType } from '@typesDef/project'

export const ProjectHeader = ({ header }: { header: ProjectHeaderType }) => {
  console.log(header)
  return (
    <WorkHeaderContainer>
      <Image
        src={header.image}
        width="100"
        height="100"
        alt="image du projet"
      />
      <HeaderContent>
        <Title>{header.title}</Title>
        <Date>{header.date}</Date>
        <Description>{header.description}</Description>
      </HeaderContent>
    </WorkHeaderContainer>
  )
}
const WorkHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  padding: 10px 0 0 20px;
`

const Title = styled.h3`
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`
const Date = styled.small`
  font-size: 14px;
  margin-top: 5px;
`
const Description = styled.p`
  font-size: 16px;
  margin-top: auto;
`

import Image from 'next/image'
import styled from 'styled-components'

import { TechType } from '@typesDef/tech'

export const TechRow = ({ technologie }: { technologie: TechType }) => {
  return (
    <TechRowContainer>
      <TechHeader>
        <Image
          src={technologie.image.src}
          width="100"
          height="100"
          alt={technologie.name}
        />
        <TechName>{technologie.name}</TechName>
      </TechHeader>
      {/* <TechDate>
        <p>{technologie.date} </p>
      </TechDate>
      <TechDesc>
        <p>{technologie.description}</p>
      </TechDesc> */}
    </TechRowContainer>
  )
}

const TechRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid var(--color-dark);
  min-height: 100px;
  width: 56%;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

const TechHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`

const TechName = styled.p`
  font-family: 'Cormorant Unicase';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  padding: 0 2rem;
  text-align: center;
  width: 200px;

  @media (max-width: 768px) {
    text-align: right;
    width: 100%;
    padding: 0 1rem;
  }
`
// const TechDate = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-left: 1px solid var(--color-dark);
//   border-right: 1px solid var(--color-dark);
//   height: 100px;
//   padding: 0 1.4rem;
//   white-space: nowrap;
//   min-width: 100px;

//   @media (max-width: 768px) {
//     border: none;
//     border-top: 1px solid var(--color-dark);
//     border-bottom: 1px solid var(--color-dark);
//     width: 100%;
//     padding: 0;
//     height: 50px;
//   }
// `

// const TechDesc = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   padding: 0 2rem;

//   @media (max-width: 768px) {
//     padding: 1.4rem;
//   }
// `

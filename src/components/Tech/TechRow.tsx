import Image from 'next/image'
import styled from 'styled-components'

export const TechRow = () => {
  return (
    <TechRowContainer>
      <TechHeader>
        <Image
          src="https://via.placeholder.com/100"
          width="100"
          height="100"
          alt="nextjs"
        />
        <TechName>Next.js</TechName>
      </TechHeader>
      <TechDate>
        <p>since 2023</p>
      </TechDate>
      <TechDesc>
        <p>desc: </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ea?
        </p>
      </TechDesc>
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

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const TechHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const TechName = styled.p`
  font-family: 'Cormorant Unicase';
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  padding: 0 2rem;
`
const TechDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid var(--color-dark);
  border-right: 1px solid var(--color-dark);
  height: 100px;
  padding: 0 2rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    border: none;
    border-top: 1px solid var(--color-dark);
    border-bottom: 1px solid var(--color-dark);
    width: 100%;
    padding: 0;
    height: 50px;
  }
`

const TechDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 1.4rem;
  }
`

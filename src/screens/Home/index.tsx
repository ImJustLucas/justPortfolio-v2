import styled from 'styled-components'

export default function Home() {
  return (
    <HomeContainer>
      <TitleSection>Hi, im Lucas 🧃</TitleSection>
      <TextContainer>
        <LeftTextContent>
          🚧 This portfolio is a work in progress. I&apos;m currently working on
          it to 🚧
        </LeftTextContent>
        <LeftTextContent>
          I&apos;m a web developer based in france who love to create and share
          ✨
        </LeftTextContent>
        <RightTextContent>
          Fullstack web developer at TheTricksNetwork and work on Tricks.social
          skate 🛹
        </RightTextContent>
        <RightTextContent>
          Founder of Musy, I also work on StudioTalo, french based creative
          studio
        </RightTextContent>
        <RightTextContent>
          I also got a secret project that I&apos;m working on 🤫 only almost
          good guys can know about it
        </RightTextContent>
      </TextContainer>
      <WorkContainer>
        <WorkRow>
          <span>currently in</span> <span>France</span>
        </WorkRow>
        <WorkRow>
          <span>working at</span> <span>TheTricksNetwork</span>
        </WorkRow>
        <WorkRow>
          <span>focused on</span> <span>Making the Future of Action sport</span>
        </WorkRow>
      </WorkContainer>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
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

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const LeftTextContent = styled.p`
  width: 40%;

  @media (max-width: 768px);
   {
    width: 100%;
  }
`

const RightTextContent = styled.p`
  width: 40%;
  text-align: right;
  align-self: flex-end;

  @media (max-width: 768px);
   {
    width: 100%;
  }
`

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 40%;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const WorkRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-dark);
  padding-bottom: 5px;

  @media (max-width: 768px);
   {
    span {
      font-size: 14px;

      &:last-child {
        color: var(--color-darkblue);
      }
    }
  }
`

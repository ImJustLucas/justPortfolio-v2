import styled from "styled-components";

export default function Home() {
  return (
    <HomeContainer>
      <TitleSection>Hi, im Lucas</TitleSection>
      <TextContainer>
        <LeftTextContent>
          Sloop red ensign code of conduct Buccaneer gun hands scuttle lee main
          sheet matey. Strike colors heave down run a shot across the bow chase
          guns rutters run a rig Buccaneer haul wind draught to go on account.
        </LeftTextContent>
        <LeftTextContent>
          Fire ship square-rigged gibbet me hearties cackle fruit gunwalls
          wherry scuttle cog. Fire ship square-rigged gibbet me hearties cackle
          fruit gunwalls wherry scuttle cog.
        </LeftTextContent>
        <RightTextContent>
          {" "}
          Fire ship square-rigged gibbet me hearties cackle fruit gunwalls
          wherry scuttle cog. Fire ship square-rigged gibbet me hearties cackle
          fruit gunwalls wherry scuttle cog.
        </RightTextContent>
        <RightTextContent>
          {" "}
          Fire ship square-rigged gibbet me hearties cackle fruit gunwalls
          wherry scuttle cog. Fire ship square-rigged gibbet me hearties cackle
          fruit gunwalls wherry scuttle cog.
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
  );
}

const HomeContainer = styled.div`
  padding: 70px 100px 0 70px;
`;

const TitleSection = styled.h2`
  font-size: 42px;
  font-family: "Cormorant Unicase", serif;
  font-weight: 400;
  font-style: normal;
  line-height: 50px;
  margin-bottom: 80px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const LeftTextContent = styled.p`
  width: 40%;
`;

const RightTextContent = styled.p`
  width: 40%;
  text-align: right;
  align-self: flex-end;
`;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 40%;
  margin-top: 50px;
`;

const WorkRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-dark);
  padding-bottom: 5px;
`;

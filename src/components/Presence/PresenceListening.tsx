import styled from "styled-components";

import { Spotify } from "@typesDef/presence";
import SpotifyLogo from "@static/images/spotify-logo.png";
import COLORS from "@constants/colors";

type PresenceListening = {
  spotify: Spotify | undefined;
};

export const PresenceListening = ({ spotify }: PresenceListening) => {
  return (
    <Container>
      <>
        <ActivityRow>
          <ActivityImageContainer>
            <ActivityImage src={spotify?.album_art_url} />
            <ActivitySecondaryImage src={SpotifyLogo.src} />
          </ActivityImageContainer>

          <ActivityInfo>
            <h5 style={{ color: COLORS.DARKBLUE }}>{spotify?.song}</h5>
            <p>by {spotify?.artist}</p>
          </ActivityInfo>
        </ActivityRow>
      </>
    </Container>
  );
};

const Container = styled.div`
  width: 100%
  cursor: pointer;
  display: flex;
  justifycontent: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-family: "Inter", sans-serif;
`;

const ActivityRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ActivityImageContainer = styled.div`
  position: relative;
  height: 50px;
`;

const ActivityImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10px;
`;

const ActivitySecondaryImage = styled.img`
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000;
  border: 2px solid #000;
`;

const ActivityInfo = styled.div`
  margin-left: 1rem;

  h5 {
    color: #fff;
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
  }
`;

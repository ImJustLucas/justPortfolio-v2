import styled from 'styled-components'

import { Activity } from '@typesDef/presence'
import COLORS from '@constants/colors'

type PresenceActivityProps = {
  currentActivity: Activity | undefined
}

export const PresenceActivity = ({
  currentActivity,
}: PresenceActivityProps) => {
  return (
    <Container>
      <ActivityRow>
        {currentActivity?.assets ? (
          <ActivityImageContainer>
            <ActivityImage
              src={`https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${currentActivity.assets.large_image}.png`}
            />
            <ActivitySecondaryImage
              src={`https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${currentActivity.assets.small_image}.png`}
            />
          </ActivityImageContainer>
        ) : null}
        <ActivityInfo>
          <h5 style={{ color: COLORS.DARKBLUE }}>{currentActivity?.name}</h5>
          {currentActivity?.details ? <p>{currentActivity?.details}</p> : null}
          {currentActivity?.state ? <p>{currentActivity?.state}</p> : null}
        </ActivityInfo>
      </ActivityRow>
    </Container>
  )
}

const Container = styled.div`
  width: 100%
  cursor: pointer;
  display: flex;
  justifycontent: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-family: "Inter", sans-serif;
`

const ActivityRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ActivityImageContainer = styled.div`
  position: relative;
  height: 50px;
`

const ActivityImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10px;
`

const ActivitySecondaryImage = styled.img`
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000;
  border: 2px solid #000;
`

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
`

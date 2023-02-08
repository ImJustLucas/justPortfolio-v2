import { useEffect, useMemo, useState } from 'react'
import { useLanyard } from 'react-use-lanyard'
import styled from 'styled-components'

import { PresenceListening } from '@components/Presence/PresenceListening'
import { PresenceActivity } from '@components/Presence/PresenceActivity'
import MAIN from '@constants/main'

type PresenceProps = 'activity' | 'listening' | 'custom'

export const PresenceBlock = () => {
  const [presence, setPresence] = useState<PresenceProps>()
  const { status /*, websocket */ } = useLanyard({
    userId: MAIN.discordID,
    socket: true,
  })

  const currentActivity = useMemo(
    () => status?.activities?.filter((activity) => activity.type === 0)[0],
    [status]
  )

  useEffect(() => {
    if (currentActivity) {
      setPresence('activity')
    } else if (status?.listening_to_spotify) {
      setPresence('listening')
    }
  }, [status, currentActivity])

  return (
    <Container>
      {presence === 'activity' ? (
        <PresenceActivity currentActivity={currentActivity} />
      ) : null}
      {presence === 'listening' ? (
        <PresenceListening spotify={status?.spotify} />
      ) : null}
    </Container>
  )
}

const Container = styled.div`
  margin-top: auto;
`

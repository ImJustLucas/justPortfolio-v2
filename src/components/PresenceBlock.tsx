import { useEffect, useState } from "react";
import { useLanyard } from "react-use-lanyard";

import { PresenceChilling } from "./Presence/PresenceChilling";
import MAIN from "@constants/main";

type PresenceProps = string;

export const PresenceBlock = () => {
  const { loading, status /*, websocket */ } = useLanyard({
    userId: MAIN.discordID,
    socket: true,
  });

  const [presence, setPresence] = useState<PresenceProps>("nothing");

  useEffect(() => {}, [loading]);
  // return <pre>{!loading && JSON.stringify(status, null, 4)}</pre>;

  if (!loading) {
    console.log(JSON.stringify(status, null, 4));
  }

  return <div>{presence === "chilling" ? <PresenceChilling /> : null}</div>;
};

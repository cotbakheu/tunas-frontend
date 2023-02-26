import React, { CSSProperties } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/stores";
import Notification from "src/components/notificationList/notification";

export const ANIMATION_DURATION = 200;
export const NOTIFICATION_TTL = 5000;

export default function NotificationList(): JSX.Element {
  const notifications = useSelector((state: RootState) => state.notifications);
  const cssVariables = {
    "--animation-duration": `${ANIMATION_DURATION}ms`,
  } as CSSProperties;

  return (
    <ul style={cssVariables}>
      {Object.entries(notifications).map(([notificationId, notification]) => (
        <Notification key={notificationId} />
      ))}
    </ul>
  );
}

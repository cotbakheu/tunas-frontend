import React from "react";
import Icon from "components/icon";

export default function IOSInstructions(): JSX.Element {
  return (
    <p>
      Tap <Icon asset="Box-Arrow" />, then select Add to Home Screen{" "}
      <Icon asset="Plus-Square" />.
    </p>
  );
}

import React from "react";
import { injectClassNames } from "utils/css";

type PlaceholderProps = {
  content?: string;
  length: string;
};

export default function Placeholder(props: PlaceholderProps): JSX.Element {
  const { content = "", length } = props;

  if (content) {
    return <>{content}</>;
  }

  return <span className={injectClassNames()}>{content}</span>;
}

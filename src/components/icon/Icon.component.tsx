import React, { createElement } from "react";
import dynamic from "next/dynamic";
import { injectClassNames } from "utils/css";

type IconProps = {
  asset: string;
  className?: string;
};

const Loader = ({ className = "" }: IconProps): JSX.Element => <span />;

export default function Icon(props: IconProps): JSX.Element {
  const { asset, className: argClassName = "" } = props;

  return createElement(
    dynamic<IconProps>(() => import(`assets/${asset}.svg`), {
      loading: () => <Loader {...props} />,
    }),
    { ...props }
  );
}

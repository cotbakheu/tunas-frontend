import React, { ReactNode } from "react";

// Style Imports
import style from "src/components/layouts/layoutStyles/BlankLayoutStyle.module.css";

type Props = {
  children: ReactNode;
};

export default function BlankLayout({ children }: Props) {
  return <div className={style.blankLayoutContainer}>{children}</div>;
}

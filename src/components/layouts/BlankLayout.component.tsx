import React, { ReactNode } from 'react'

// Style Imports
import style from 'src/components/layouts/layoutStyles/BlankLayoutStyle.module.css'

type Props = {
  children: ReactNode
}

export default function BlankLayout({ children }: Props): React.ReactElement {
  return <div className={`dark:bg-grey-800 bg-whiteBg ${style.blankLayoutContainer}`}>{children}</div>
}

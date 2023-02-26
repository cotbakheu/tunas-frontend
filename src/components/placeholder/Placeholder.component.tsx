import React from 'react'
import { injectClassNames } from 'src/utils/css'

type PlaceholderProps = {
  content?: string
  length: string
}

export default function Placeholder(props: PlaceholderProps): JSX.Element {
  const { content = '' } = props

  if (content) {
    return <>{content}</>
  }

  return <span className={injectClassNames()}>{content}</span>
}

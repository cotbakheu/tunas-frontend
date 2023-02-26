import React, { createElement } from 'react'
import dynamic from 'next/dynamic'

type IconProps = {
  asset: string
  className?: string
}

const Loader = ({}: IconProps): JSX.Element => <span />

export default function Icon(props: IconProps): JSX.Element {
  const { asset } = props

  return createElement(
    dynamic<IconProps>(() => import(`assets/${asset}.svg`), {
      loading: () => <Loader {...props} />
    }),
    { ...props }
  )
}

import React from 'react'
import Link from 'next/link'

const links = [
  { name: 'Home', url: '/', alias: [] },
  { name: 'Pages', url: '/pages', alias: ['/[page]'] },
  { name: 'Profile', url: '/profile', alias: [] }
]

export default function Items(): JSX.Element {
  return (
    <ul>
      {links.map(({ name, url }) => (
        <li key={name}>
          <Link href={url}>{name}</Link>
        </li>
      ))}
    </ul>
  )
}

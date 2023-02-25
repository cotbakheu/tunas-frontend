import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { name: "Home", url: "/", alias: [] },
  { name: "Pages", url: "/pages", alias: ["/[page]"] },
  { name: "Profile", url: "/profile", alias: [] },
];

export default function Items(): JSX.Element {
  const { pathname } = useRouter();

  return (
    <ul>
      {links.map(({ name, url, alias }) => (
        <li key={name}>
          <Link href={url}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}

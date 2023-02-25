import React from "react";
import Pages from "components//pages";
import Placeholder from "components/placeholder";

export default function Sidebar(): JSX.Element {
  return (
    <aside>
      <div>
        <h3>Pages</h3>
        <Pages>
          <li>
            <Placeholder length="short" />
          </li>
          <li>
            <Placeholder length="short" />
          </li>
          <li>
            <Placeholder length="short" />
          </li>
        </Pages>
      </div>
    </aside>
  );
}

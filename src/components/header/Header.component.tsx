import React, { memo, useEffect } from "react";
import Icon from "src/components/icon";
import Items from "src/components/header/items";
import Logo from "src/components/header/logo";
import ThemeToggler from "src/components/header/themeToggler";

const OFFLINE = "offline";

const handleNetworkChange = (): void => {
  const {
    documentElement: { classList },
  } = document;

  if (!navigator.onLine) {
    classList.add(OFFLINE);

    return;
  }

  classList.remove(OFFLINE);
};

export default memo(function Header(): JSX.Element {
  useEffect(() => {
    if (typeof window !== undefined) {
      handleNetworkChange();

      window.addEventListener("online", handleNetworkChange);
      window.addEventListener("offline", handleNetworkChange);

      return () => {
        window.removeEventListener("online", handleNetworkChange);
        window.removeEventListener("offline", handleNetworkChange);
      };
    }
  }, []);

  return (
    <>
      <div>
        <Icon asset="Cloud-Slash" />
        You are currently browsing in offline mode.
      </div>
      <header>
        <nav>
          <div>
            <Logo />
            <ThemeToggler />
          </div>
          <Items />
        </nav>
      </header>
    </>
  );
});

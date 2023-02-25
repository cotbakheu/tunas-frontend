import React, { useEffect, useState } from "react";

// Style Imports
import style from "src/components/theme-toggler/ThemeTogglerStyle.module.css";

// Icon Impors
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

type Props = {};

const ThemeToggler = (props: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  function handleTogglDarkMode() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <>
      <div
        className={`bg-grey-200 dark:bg-grey-500 ${style.togglerContainer}`}
        onClick={handleTogglDarkMode}
      >
        {!isDarkMode ? (
          <>
            <BsFillSunFill />
          </>
        ) : (
          <>
            <BsFillMoonStarsFill />
          </>
        )}
      </div>
    </>
  );
};

export default ThemeToggler;

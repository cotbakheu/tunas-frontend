import React, { useEffect, useState } from 'react'

// Style Imports
import style from 'src/components/theme-toggler/ThemeTogglerStyle.module.css'

// Icon Impors
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'

const ThemeToggler = (): React.ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  function handleTogglDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <>
      <div className={`bg-grey-200 dark:bg-grey-500 ${style.togglerContainer}`} onClick={handleTogglDarkMode}>
        {!isDarkMode ? (
          <>
            <BsFillSunFill style={{ color: '#f1c40f', fontSize: '2rem' }} />
          </>
        ) : (
          <>
            <BsFillMoonStarsFill style={{ fontSize: '2rem' }} />
          </>
        )}
      </div>
    </>
  )
}

export default ThemeToggler

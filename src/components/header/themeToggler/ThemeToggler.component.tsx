import React, {
  SyntheticEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import Head from "next/head";
import { useTheme } from "src/hooks/theme";
import Icon from "src/components/icon";
import Switch from "src/components/switch";
import { theme } from "src/config";
import { injectClassNames } from "src/utils/css";
import { useOutsideClick } from "src/hooks/events";

const DARK_MODE_SETTING = "dark-mode-enabled";
const SYSTEM_THEME_SETTING = "system-theme-enabled";

export default function ThemeToggler(): JSX.Element {
  const { userTheme, systemTheme } = useTheme();
  const [isDarkModeEnabled, setIsDarkModeEnabled] = userTheme;
  const [isSystemThemeUsed, setIsSystemThemeUsed] = systemTheme;
  const [isSettingMenuOpen, setIsSettingMenuOpen] = useState(false);
  const settingMenuRef = useRef<HTMLUListElement | null>(null);
  const themeColor = isDarkModeEnabled ? theme.dark : theme.light;

  const onToggleTheme = useCallback((): void => {
    setIsSystemThemeUsed(false);
    setIsDarkModeEnabled((isDarkModeEnabled) => !isDarkModeEnabled);
  }, [setIsSystemThemeUsed, setIsDarkModeEnabled]);
  const onToggleSystemTheme = useCallback((): void => {
    setIsSystemThemeUsed((isSystemThemeUsed) => !isSystemThemeUsed);
  }, [setIsSystemThemeUsed]);
  const onToggleSettings = useCallback(
    (event: SyntheticEvent<HTMLButtonElement>): void => {
      event.preventDefault();

      setIsSettingMenuOpen((isSettingMenuOpen) => !isSettingMenuOpen);
    },
    [setIsSettingMenuOpen]
  );

  useOutsideClick(settingMenuRef, () => {
    setIsSettingMenuOpen(false);
  });

  return (
    <>
      <Head>
        <meta name="theme-color" content={themeColor} />
      </Head>
      {/*
       * We're using black-translucent status bar setting on IOS,
       * which means that status bar has white text & tranparent background.
       * In light mode this causes the text to be invisible, so we create
       * a <figure> to put a different-colored bar behind env(safe-area-inset-top),
       * so that the text can be seen.
       *
       * Currently this is the only way to do this, as IOS will not listen for status bar
       * meta tag changes, and other settings create a significantly worse feel.
       */}
      <figure />
      <div>
        {useMemo(
          () => (
            <button
              aria-label="change theme"
              onContextMenu={onToggleSettings}
              onClick={onToggleTheme}
            >
              <Icon asset="Moon" />
              <Icon asset="Sun" />
            </button>
          ),
          [onToggleSettings, onToggleTheme]
        )}
        <ul ref={settingMenuRef}>
          <li>
            <Switch
              id={DARK_MODE_SETTING}
              checked={!isSystemThemeUsed && isDarkModeEnabled}
              onChange={onToggleTheme}
              disabled={isSystemThemeUsed}
            />
            <label htmlFor={DARK_MODE_SETTING}>Use Dark Mode</label>
          </li>
          <li>
            <Switch
              id={SYSTEM_THEME_SETTING}
              checked={isSystemThemeUsed}
              onChange={onToggleSystemTheme}
            />
            <label htmlFor={SYSTEM_THEME_SETTING}>Use System Theme</label>
          </li>
        </ul>
      </div>
    </>
  );
}

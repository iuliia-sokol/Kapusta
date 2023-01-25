import { useEffect } from 'react';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';
import useLocalStorage from 'use-local-storage';
import { Ball, Checkbox, Label, Switcher } from './ThemeBtn.styled';

export const ThemeSwitcher = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Switcher>
      <Checkbox
        type="checkbox"
        checked={theme === 'dark'}
        id="theme-switcher"
        onChange={toggleTheme}
      />

      <Label htmlFor="theme-switcher">
        <BsFillSunFill />
        <BsMoonStarsFill />
        <Ball />
      </Label>
    </Switcher>
  );
};

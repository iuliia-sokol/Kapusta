import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';

import { setTheme } from 'redux/theme/themeSlice';
import { Ball, Checkbox, Label, Switcher } from './ThemeBtn.styled';
import { getMode } from 'redux/theme/themeSelector';

export const ThemeSwitcher = () => {
  const selectedMode = useSelector(getMode);
  const dispatch = useDispatch();
  const [mode, setMode] = useState(selectedMode.mode ?? 'light');

  const changeTheme = () => {
    const newTheme = mode === 'light' ? 'dark' : 'light';
    setMode(newTheme);
  };

  useEffect(() => {
    dispatch(setTheme({ mode }));
    window.localStorage.setItem('theme', mode);
  }, [dispatch, mode]);

  return (
    <Switcher>
      <Checkbox
        type="checkbox"
        checked={mode === 'dark'}
        id="theme-switcher"
        onChange={changeTheme}
      />

      <Label htmlFor="theme-switcher">
        <BsFillSunFill />
        <BsMoonStarsFill />
        <Ball />
      </Label>
    </Switcher>
  );
};

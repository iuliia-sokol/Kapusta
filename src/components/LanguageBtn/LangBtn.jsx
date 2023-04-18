import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from 'images/icons_sprite.svg';
import { Ball, Checkbox, Label, Switcher, FlagSvg } from './LangBtn.styled';
import { setLanguage } from 'redux/lang/langSlice';
import { getLang } from 'redux/lang/langSelectors';

export const LangSwitcher = () => {
  const selectedLang = useSelector(getLang)
  const dispatch = useDispatch();
  const [lang, setLang] = useState(selectedLang.lang?? 'en');

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'ua' : 'en';
    setLang(newLang);
  };

  useEffect(() => {
    dispatch(setLanguage({ lang }));
    window.localStorage.setItem('language', lang);
  }, [dispatch, lang]);

  return (
    <Switcher>
      <Checkbox
        type="checkbox"
        checked={lang === 'en'}
        id="lang-switcher"
        onChange={toggleLang}
      />

      <Label htmlFor="lang-switcher">
        <FlagSvg>
          <use href={sprite + `#united-kingdom`} />
        </FlagSvg>
        <FlagSvg>
          <use href={sprite + `#ukraine`} />
        </FlagSvg>

        <Ball />
      </Label>
    </Switcher>
  );
};

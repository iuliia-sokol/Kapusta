import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from 'images/icons_sprite.svg';
import { Label, Wrapper } from './DatePickerComponent.styled';
import { enUS, uk } from 'date-fns/locale';
import { getLang } from 'redux/lang/langSelectors';

registerLocale('en', enUS);
registerLocale('uk', uk);

export function DatePickerComponent({ date, maxDate, handler }) {
  const lang = useSelector(getLang).lang;
  return (
    <>
      <Label className="label">
        <svg className="iconCalendar" width="20" height="20">
          <use href={sprite + `#calendar`} />
        </svg>
        <Wrapper>
          <ReactDatePicker
            className="date"
            name="date"
            dateFormat="dd.MM.yyyy"
            selected={date}
            maxDate={maxDate}
            onChange={handler}
            shouldCloseOnSelect={true}
            locale={lang === 'en' ? 'en' : 'uk'}
          />
        </Wrapper>
      </Label>
    </>
  );
}

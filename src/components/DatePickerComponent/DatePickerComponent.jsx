import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import './DatePickerComponent.css';
import sprite from 'images/icons_sprite.svg';
import { Label, Wrapper } from './DatePickerComponent.styled';

export function DatePickerComponent({ date, maxDate, handler }) {
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
          />
        </Wrapper>
      </Label>
    </>
  );
}

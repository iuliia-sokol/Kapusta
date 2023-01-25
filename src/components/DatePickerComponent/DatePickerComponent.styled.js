import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & .react-datepicker__day--selected {
    background-color: ${p => p.theme.colors.PrimaryOrange};
  }

  & .react-datepicker__day--keyboard-selected {
    background-color: ${p => p.theme.colors.PrimaryOrange};
  }

  & .react-datepicker__header {
    background-color: ${p => p.theme.colors.PrimaryGray};
    border: none;
  }

  & .react-datepicker {
    border: 2px solid ${p => p.theme.colors.PrimaryGray};
    color: ${p => p.theme.colors.PrimaryGray};
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-35%);

    @media screen and (min-width: 768px) {
      left: -30px;
      transform: translateX(0);
    }
  }

  & .react-datepicker__day-name {
    color: ${p => p.theme.colors.PrimaryBlack};
  }
  &
    .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after {
    border-bottom-color: ${p => p.theme.colors.PrimaryGray};
  }

  & .react-datepicker__triangle {
    position: absolute;
    left: 0px;

    @media screen and (min-width: 768px) {
      position: absolute;
      margin-top: 15px;
      left: 0px;
      /* transform: translate(30px, 30px) !important; */
    }
  }

  & .react-datepicker__month-container {
    color: ${p => p.theme.colors.PrimaryBlack};
    background-color: ${p => p.theme.colors.PrimaryWhite};
  }

  & .react-datepicker__day {
    color: ${p => p.theme.colors.PrimaryBlack};

    &--disabled {
      color: ${p => p.theme.colors.datePickerFutureDates};
    }
  }

  & .react-datepicker__current-month {
    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.15;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: ${p => p.theme.colors.PrimaryBlack};
  }

  & .react-datepicker__day--selected:hover,
  & .react-datepicker__day--selected:focus {
    background-color: ${p => p.theme.colors.PrimaryOrange};
  }

  & .react-datepicker-wrapper {
    width: 100%;
  }

  & .date {
    background-color: transparent;
    height: 40px;
    width: 74px;
    margin-left: 10px;
    border: none;
    cursor: pointer;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 12px;
    line-height: 1.15;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    outline: #ff751d;
    color: ${p => p.theme.colors.logoGrey};
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & svg {
    fill: ${p => p.theme.colors.iconsFill};
    transition: fill 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg,
  &:focus svg {
    fill: ${p => p.theme.colors.PrimaryOrange};
  }
`;

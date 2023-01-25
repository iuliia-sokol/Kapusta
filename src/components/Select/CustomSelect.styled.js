import Select from 'react-select';
import styled from 'styled-components';

export const CustomSelectStyled = styled(Select)`
  & .react-select__control {
    z-index: 1000;
    box-sizing: border-box;
    width: 168px;
    height: 40px;
    background-color: ${p => p.theme.colors.PrimaryWhite};
    color: #52555f;
    font-size: 12px;
    box-shadow: none;
    font-weight: 400;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.15;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    text-align: start;
    padding-left: 20px;
    border-radius: 0 0 0 16px;
    border: none;

    &:hover {
      border: 1px solid ${p => p.theme.colors.PrimaryOrange};
    }

    &--is-focused {
      border: 1px solid ${p => p.theme.colors.PrimaryOrange};
    }

    @media screen and (min-width: 768px) {
      border-radius: 0;
    }
  }

  & .react-select__input {
    color: ${p => p.theme.colors.PaleGray};
  }

  & .react-select__placeholder {
    color: ${p => p.theme.colors.PaleGray};
  }

  & .react-select__menu {
    box-sizing: border-box;
    position: absolute;
    width: 168px;
    background-color: ${p => p.theme.colors.PrimaryWhite};
    z-index: 200;
    border: 2px solid ${p => p.theme.colors.PrimaryGray};
    box-shadow: 0px 3px 4px rgba(170, 178, 197, 0.4);
  }

  & .react-select__value-container {
    padding: 0;
  }

  & .react-select__single-value {
    color: ${p => p.theme.colors.TextGray};
  }

  & .react-select__indicator-separator {
    display: none;
  }

  & .react-select__dropdown-indicator {
    & svg {
      fill: ${p => p.theme.colors.PaleGray};
    }

    &:focus svg {
      fill: ${p => p.theme.colors.logoGrey};
      transform: rotate(180deg);
    }
  }

  & .react-select__option {
    height: 32px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    font-size: 12px;
    box-shadow: none;
    font-weight: 400;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.15;
    letter-spacing: 0.02em;
    color: ${p => p.theme.colors.PaleGrey};
    background-color: ${p => p.theme.colors.PrimaryWhite};
    /* cursor: default; */

    &:disabled {
      cursor: not-allowed;
    }

    &--is-focused {
      cursor: default;
      background-color: ${p => p.theme.colors.selectOption};
      color: ${p => p.theme.colors.TextGrey};
    }
  }
`;

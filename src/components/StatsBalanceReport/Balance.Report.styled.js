import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BalanceFrom } from 'components/Balance/BalanceForm';

export const BalanceContainer = styled.div`
  box-sizing: border-box;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    height: 44px;
    flex-direction: row;
  }
`;

export const StyledBtn = styled.button`
  box-sizing: border-box;

  height: 44px;
  width: 125px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: rgba(82, 85, 95, 0.7);
  background-color: ${p => p.theme.colors.BgGray};

  transition: background-color 400ms cubic-bezier(0.4, 0, 0.2, 1),
    color 400ms cubic-bezier(0.4, 0, 0.2, 1),
    border 400ms cubic-bezier(0.4, 0, 0.2, 1);

  border: 2px solid #ffffff;
  border-radius: 16px;

  cursor: pointer;

  &:hover,
  &:focus {
    color: white;
    background-color: ${p => p.theme.colors.PrimaryOrange};

    border: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 22px;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: rgba(82, 85, 95, 0.7);
  transition: color 400ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.PrimaryOrange};
  }

  @media screen and (min-width: 768px) {
    align-self: unset;
    margin-bottom: 0;
    flex-grow: 2;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: unset;
    flex-grow: 2;
    justify-content: space-between;
  }
`;

export const FormWrapper = styled(BalanceFrom)`
  justify-content: flex-start;
`;

export const PeriodContainer = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MainPageSvg = styled.svg`
  height: 18px;
  width: 18px;

  margin-right: 19px;

  @media screen and (max-width: 480px) {
    margin-right: 0;
    margin-left: 3px;
  }
`;

export const Period = styled.p`
  font-size: 12px;
  line-height: 1.67;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.TextGray};
  margin: 0;
`;

export const PeriodBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  border: none;

  cursor: pointer;
`;

export const PeriodArrow = styled.svg`
  height: 14px;
  width: 12px;
`;

export const BaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MounthContainer = styled(BaseContainer)`
  width: fit-content;
`;

export const PeriodData = styled.p`
  display: inline-flex;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${p => p.theme.colors.PrimaryBlack};
  user-select: none;
`;

export const MainPageText = styled.p`
  margin: 0;
  display: none;
  color: ${p => p.theme.colors.TextGray};

  @media screen and (min-width: 768px) {
    display: inline-flex;
  }
`;
export const MounthBox = styled.div`
  min-width: 150px;
`;

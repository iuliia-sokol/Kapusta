import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

  @media screen and (max-width: 480px) {
    align-self: flex-start;
    margin-bottom: 22px;
  }
`;

export const PeriodContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
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

  color: rgba(82, 85, 95, 0.7);

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
  color: #000000;
  user-select: none;
`;

export const MainPageText = styled.p`
  margin: 0;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const MounthBox = styled.div`
  min-width: 150px;
`;

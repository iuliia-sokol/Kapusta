import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BalanceContainer = styled.div`
  height: auto;
  flex-direction: column-reverse;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 44px;
    /* margin: 0 auto; */
    gap: 0;
    margin-bottom: 60px;
    position: relative;

    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    justify-content: flex-end;
    margin-bottom: 8px;
  }
`;

export const PortalContainer = styled.div`
  height: 0;
  width: 125px;
  padding-left: 68px;
  padding-right: 141px;
`;

export const AbsoluteContainer = styled(BalanceContainer)`
  box-sizing: border-box;
  top: 144px;
  height: 0;
  width: 100%;

  position: absolute;

  margin: 0 auto;
  padding: 0 91px;

  @media screen and (max-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (max-width: 480px) {
    top: 232px;
    left: -22px;

    padding: 0 20px;
  }
`;

export const BalanceForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: unset;
    flex-direction: row;
    justify-content: flex-start;
    gap: 0;
  }

  @media screen and (min-width: 1280px) {
    align-self: center;
    justify-content: center;
    flex-grow: 2;
  }
`;

export const BalanceFormNotification = styled(BalanceForm)``;

export const Text = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.02em;

  color: rgba(82, 85, 95, 0.7);

  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
`;

export const CurrentBalance = styled.p`
  margin: 0;
  position: relative;

  font-weight: 700;
  font-size: 12px;
  line-height: 1.67px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: center;
  color: black;
`;

export const Input = styled.input`
  /* width: 74px; */
  font-weight: 700;
  font-size: 12px;
  line-height: 1.67px;
  letter-spacing: 0.02em;
  text-align: center;
  color: black;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const CurrentBalanceContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  /* width: 50%; */
  max-width: 280px;
  width: ${p => (p.btnDisplay ? '140px' : '40vw')};
  height: 44px;
  display: flex;
  justify-content: ${p => (p.btnDisplay ? 'flex-end' : 'center')};
  align-items: center;
  /* padding: 15px 29px; */
  padding: 12px 16px;
  border: 2px solid #ffffff;
  border-radius: ${p => (p.btnDisplay ? '22px 0px 0px 22px' : '16px')};
  background-color: ${p => p.theme.colors.BgGray};

  @media screen and (min-width: 768px) {
    width: 125px;
    /* justify-content: center; */
    margin-top: 0;
    border-radius: 16px;
  }
`;

export const StyledBtn = styled.button`
  display: ${p => (p.btnDisplay ? 'inline-flex' : 'none')};
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  /* width: ${p => (p.btnDisplay ? 'unset' : '140px')}; */
  height: 44px;
  width: 140px;
  border-radius: 0px 22px 22px 0px;
  padding: 12px;
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgba(82, 85, 95, 0.7);
  border: 2px solid #ffffff;

  background-color: ${p => p.theme.colors.BgGray};

  cursor: pointer;

  transition: background-color 400ms cubic-bezier(0.4, 0, 0.2, 1),
    color 400ms cubic-bezier(0.4, 0, 0.2, 1),
    border 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: white;
    background-color: ${p => p.theme.colors.PrimaryOrange};
    border: none;
  }

  @media screen and (min-width: 768px) {
    width: 125px;
    margin-top: 0;
    border-radius: 16px;
    justify-content: center;
  }

  @media screen and (min-width: 1280px) {
    display: inline-flex;
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
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  & svg {
    fill: ${p => p.theme.colors.TextGray};
    transition: fill 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  cursor: pointer;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.PrimaryOrange};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${p => p.theme.colors.PrimaryOrange};
    fill: ${p => p.theme.colors.PrimaryOrange};
  }

  @media screen and (min-width: 1280px) {
    /* flex-grow: 1; */
    justify-content: flex-end;
  }
`;

export const ReportsSvg = styled.svg`
  height: 14px;
  width: 14px;

  margin-left: 20px;
`;

export const BaseContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 16px;
    justify-content: center;
    width: unset;
  }
`;

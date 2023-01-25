import styled from 'styled-components';
import { Link } from 'components/NavLink/NavLink.styled';

export const Container = styled.div`
  margin-top: 8px;
  position: relative;
`;

export const Box = styled.div`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 4px;
  position: fixed;
  bottom: 0;
  left: 0;

  @media screen and (min-width: 768px) {
    position: static;
    width: fit-content;
    justify-content: flex-start;
    gap: 0;
  }
`;

export const TabLink = styled(Link)`
  width: calc(50% - 2px);
  height: 53px;
  border-radius: 0;
  box-shadow: none;
  background-color: ${p => p.theme.colors.TabBg};
  /* background-color: #f5f6fb; */
  filter: none;

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 40px;
    /* background-color: #fafbfd; */
    background-color: ${p => p.theme.colors.TabBg};
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;

    &:hover,
    &:focus {
      filter: none;
      background-color: ${p => p.theme.colors.TabBg};
      /* background-color: #fafbfd; */
      color: ${p => p.theme.colors.PrimaryOrange};
    }
    &:active {
      filter: none;
      background-color: ${p => p.theme.colors.TabBg};
      /* background-color: #fafbfd; */
      color: ${p => p.theme.colors.PrimaryOrange};
    }
  }
`;

export const Outlet = styled.div`
  padding: 0px;
  margin-top: 0px;
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    padding: 24px 40px 42px;
    background-color: ${p => p.theme.colors.transactionList};
    border-radius: 0px 30px 30px 30px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }
  @media screen and (min-width: 1280px) {
    padding: 32px 32px 61px 32px;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 60px;
    flex-direction: row;
    justify-content: center;
    gap: 74px;
  }
`;

export const TransactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-top: 20px; */
  background-color: ${p => p.theme.colors.PrimaryWhite};
  border-radius: 0px 30px 30px 30px;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);

  @media screen and (min-width: 768px) {
    background-color: transparent;
    border-radius: 0px;
    box-shadow: none;
    /* flex-direction: column;
    gap: 40px; */
  }

  @media screen and (min-width: 1280px) {
    /* margin-top: 60px; */
    /* justify-content: center;
    gap: 74px; */
  }
`;

export const SummaryWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    bottom: -162px;
    left: 0;
  }

  @media screen and (min-width: 1280px) {
    position: static;
  }
`;

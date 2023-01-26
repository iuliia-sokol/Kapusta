import styled from 'styled-components';
import { theme } from 'utils/theme';

const styledComponents = {
  BoxForBalance: styled.div`
    display: block;
    width: 705px;
    padding: 0;
    margin: 0 auto 30px auto;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    @media screen and (min-width: 1280px) {
      width: 1035px;
    }
  `,

  BoxStats: styled.div`
    width: 100%;
    padding: 5px 5px;
    margin: 0;
    background-color: transparent;
    display: block;
    /* text-align: center; */
    margin: 0 auto 32px auto;

    /* @media screen and (min-width: 320px) {
      width: 320px;
    } */

    @media screen and (min-width: 768px) {
      width: 705px;
      padding: 20px;
      border-radius: 30px;
      background-color: ${p => p.theme.colors.transactionList};
      box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    }

    @media screen and (min-width: 1280px) {
      margin: 0 auto 40px auto;
      width: 1035px;
    }
  `,

  BoxForSchedule: styled.div`
    width: 100%;
    height: 350px;
    padding: 5px 5px;
    display: block;
    /* text-align: center; */
    border-radius: 30px;
    margin: 0 auto;

    background-color: ${p => p.theme.colors.transactionList};
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);

    @media screen and (min-width: 320px) {
      width: 320px;
      padding: 20px;
    }

    @media screen and (min-width: 768px) {
      width: 705px;
      height: 350px;
      padding: 20px;
    }

    @media screen and (min-width: 1280px) {
      width: 1035px;
    }
  `,

  ListOfBalanceChanges: styled.ul`
    display: flex;
    padding: 0;
    width: 625px;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
    row-gap: 40px;
    column-gap: 30px;
    list-style: none;
    color: ${p => p.theme.colors.TextGray};

    @media screen and (max-width: 768px) {
      column-gap: 0;
      row-gap: 0;
      width: 100%;
    }
  `,

  ItemOfBalanceChanges: styled.li`
    max-width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: ${p => p.theme.colors.TextGray};

    @media screen and (max-width: 768px) {
      max-width: 110px;
      padding: 20px 10px;

      border-bottom: 1px solid ${p => p.theme.colors.TextGray};
    }
  `,

  TitleOfBalanceChanges: styled.h3`
    display: inline-block;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    margin: 0 30px 20px 30px;
    color: ${p => p.theme.colors.PrimaryBlack};
  `,

  SvgBoxStyle: styled.svg`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    margin: -5px;
    fill: ${p => p.theme.colors.iconsFill};
    transition: 350ms ease-in-out;

    &:hover,
    &:focus,
    &:active {
      fill: ${p => p.theme.colors.PrimaryOrange};
      transform: scale(1.2);
    }
  `,

  BoxForSvg: styled.div`
    background-color: ${p => p.theme.colors.BgGray};
    border-radius: 30px;
    width: 46px;
    height: 46px;
    margin: 5px -5px 10px 0;

    &:hover {
      background-color: ${theme.colors.PaleOrange};
      transform: scale(1.2);
    }
  `,

  BtnToggleStats: styled.button`
    padding: 5px;
    border: none;
    background-color: transparent;
  `,

  Sum: styled.p`
    display: inline-flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    margin-bottom: 8px;
  `,
};

export default styledComponents;

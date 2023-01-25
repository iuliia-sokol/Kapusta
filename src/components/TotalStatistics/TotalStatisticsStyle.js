import styled from 'styled-components';
import { theme } from 'utils/theme';

const TotalStatsStyle = {
  BoxStats: styled.div`
    box-sizing: border-box;
    height: 85px;
    padding: 20px 10px;
    display: block;
    text-align: center;
    margin: 0 auto 30px auto;
    background-color: ${theme.colors.PrimaryWhite};
    box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
    border-radius: 20px;

    @media screen and (min-width: 768px) {
      height: 50px;
      width: 705px;
      padding: 15px;
      border-radius: 30px;
    }

    @media screen and (min-width: 1280px) {
      width: 1035px;
    }
  `,
  List: styled.ul`
    height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: ${theme.colors.TextGray};

    @media screen and (max-width: 768px) {
      justify-content: center;
      column-gap: 10px;
      width: 100%;
    }
  `,

  AmountExpenses: styled.li`
    width: 50%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & > span {
      color: red;
      display: inline-block;
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;
      padding-right: 20px;
      justify-content: flex-end;

      & > span {
        margin-left: 15px;
      }
    }
  `,

  AmountIncome: styled.li`
    width: 50%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-left: 1px solid ${theme.colors.TextGray};

    & > span {
      color: green;
      display: inline-block;
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;
      padding-left: 20px;

      & > span {
        margin-left: 15px;
      }
    }
  `,
};

export default TotalStatsStyle;

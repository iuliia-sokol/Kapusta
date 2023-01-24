import Income from 'components/Income/Income';
import Expenses from 'components/Expenses/Expenses';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatistics } from 'redux/statistics/statsOperations';
import { BalanceReport } from 'components/StatsBalanceReport/BalanceReport';
import TotalStatistics from 'components/TotalStatistics/TotalStatistics';
import styledComponents from 'components/Expenses/styleExpenses';
import { currentPeriod } from 'redux/statistics/statsSlice';
import { AnimatedCabbages } from './Wallet.styled';
import {
  ImageWrapper,
  Particles,
} from 'components/AnimatedBg/AnimatedBg.styled';
import { ContainerStats, AnimationWrapperStats } from './Stats.styled';

const { BoxForBalance } = styledComponents;

const Statistics = () => {
  const [toggleStats, setToggleStats] = useState(false);

  const statePeriod = useSelector(state => state.statistics.period);

  const dispatch = useDispatch();

  useEffect(
    () => {
      if (!statePeriod) {
        const objDate = new Date();
        const year = objDate.getFullYear();
        const month = objDate.getMonth() + 1;

        const period = `${year}-${month > 10 ? month : `0${month}`}`;
        dispatch(currentPeriod(JSON.stringify(objDate)));
        dispatch(getStatistics({ period }));
      }

      return () => {
        dispatch(currentPeriod(''));
      };
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const statistics = useSelector(state => state.statistics.statistics);

  if (!statistics) {
    return;
  }

  const onClick = () => {
    setToggleStats(prev => !prev);
  };

  return (
    <ContainerStats>
      <ImageWrapper />
      <BoxForBalance>
        <BalanceReport />
      </BoxForBalance>

      <TotalStatistics
        expenses={statistics.data.expenses.expenseTotal}
        income={statistics.data.incomes.incomeTotal}
      />
      {toggleStats ? (
        <Income onClick={onClick} />
      ) : (
        <Expenses onClick={onClick} />
      )}

      <AnimatedCabbages />
      <AnimationWrapperStats>
        <Particles>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </Particles>
      </AnimationWrapperStats>
    </ContainerStats>
  );
};

export default Statistics;

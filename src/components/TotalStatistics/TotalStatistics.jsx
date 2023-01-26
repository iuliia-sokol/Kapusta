import { useSelector } from 'react-redux';
import { getLang } from 'redux/lang/langSelectors';
import { formattingSum } from 'utils/formattingSum';
import TotalStatsStyle from './TotalStatisticsStyle';

const { List, AmountExpenses, AmountIncome, BoxStats } = TotalStatsStyle;

const TotalStatistics = ({ expenses, income }) => {
  const lang = useSelector(getLang).lang;
  return (
    <BoxStats>
      <List>
        {lang === 'en' ? (
          <AmountExpenses>
            Expenses:
            <span>{`- ${formattingSum(expenses)} UAH.`}</span>
          </AmountExpenses>
        ) : (
          <AmountExpenses>
            Витрати:
            <span>{`- ${formattingSum(expenses)} ГРН.`}</span>
          </AmountExpenses>
        )}
        {lang === 'en' ? (
          <AmountIncome>
            Income:
            <span>{`+ ${formattingSum(income)} UAH.`}</span>
          </AmountIncome>
        ) : (
          <AmountIncome>
            Прибутки:
            <span>{`+ ${formattingSum(income)} ГРН.`}</span>
          </AmountIncome>
        )}
      </List>
    </BoxStats>
  );
};

export default TotalStatistics;

import { formattingSum } from 'utils/formattingSum';
import TotalStatsStyle from './TotalStatisticsStyle';

const { List, AmountExpenses, AmountIncome, BoxStats } = TotalStatsStyle;

const TotalStatistics = ({ expenses, income }) => {
  return (
    <BoxStats>
      <List>
        <AmountExpenses>
          Expenses:
          <span>{`- ${formattingSum(expenses)} UAH.`}</span>
        </AmountExpenses>
        <AmountIncome>
          Income:
          <span>{`+ ${formattingSum(income)} UAH.`}</span>
        </AmountIncome>
      </List>
    </BoxStats>
  );
};

export default TotalStatistics;

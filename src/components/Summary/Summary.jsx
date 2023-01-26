import { useSelector } from 'react-redux';
import { getLang } from 'redux/lang/langSelectors';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';
import { formattingSum } from 'utils/formattingSum';
import { wordTranslator, wordTranslatorUK } from 'utils/wordTranslator';
import {
  SummaryItems,
  SummaryList,
  SummaryText,
  SummaryTitle,
} from './Summary.styled';

function Summary() {
  const lang = useSelector(getLang).lang;
  const transactions = useSelector(selectTransactions);

  return (
    <SummaryList>
      {lang === 'en' ? (
        <SummaryTitle>Summary</SummaryTitle>
      ) : (
        <SummaryTitle>Досьє</SummaryTitle>
      )}
      {transactions?.monthsStats &&
        Object.entries(transactions.monthsStats)
          .filter(operation => typeof operation[1] === 'number')
          .map(operation => {
            return (
              <SummaryItems key={wordTranslator(operation[0])}>
                {lang === 'en' ? (
                  <SummaryText>{wordTranslator(operation[0])}</SummaryText>
                ) : (
                  <SummaryText>{wordTranslatorUK(operation[0])}</SummaryText>
                )}
                {lang === 'en' ? (
                  <SummaryText>{formattingSum(operation[1])} UAH</SummaryText>
                ) : (
                  <SummaryText>{formattingSum(operation[1])} ГРН</SummaryText>
                )}
              </SummaryItems>
            );
          })}
    </SummaryList>
  );
}

export default Summary;

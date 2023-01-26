import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchExpenseTransactions,
  fetchIncomeTransactions,
  removeTransaction,
} from 'redux/transactions/transactionsOps';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';
import { wordTranslator, wordTranslatorUK } from 'utils/wordTranslator';
import { getParseDate } from 'utils/getParseDate';
import stylesTransactionsList from './TransactionsListStyle';
import svg from '../../images/icons_sprite.svg';
import { formattingSum } from 'utils/formattingSum';
import { sortTransactions } from 'utils/sortTransactions';
import { getLang } from 'redux/lang/langSelectors';

const {
  BoxForList,
  List,
  ListItems,
  BtnForRemove,
  DateStyle,
  DescriptionStyle,
  CategoryStyle,
  AmountStyle,
  ListHeaderItems,
  SvgBoxStyle,
  CategoryHeaderStyle,
  AmountHeaderStyle,
  DescriptionHeaderStyle,
  DateHeaderStyle,
  DataWrapper,
  DateDescrWrapper,
  DescriptionStyleMobileWrapper,
  DescriptionStyleTabletWrapper,
  AmountWrapper,
} = stylesTransactionsList;

function TransactionsList({ type }) {
  const lang = useSelector(getLang).lang;
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();

  document.addEventListener('resize', event => {
    console.log('event :>> ', event);
  });

  useEffect(() => {
    if (type === 'expense') {
      dispatch(fetchExpenseTransactions());
      return;
    }
    if (type === 'income') {
      dispatch(fetchIncomeTransactions());
      return;
    }
  }, [dispatch, type]);

  return (
    <>
      <BoxForList>
        <ListHeaderItems>
          {lang === 'en' ? (
            <DateHeaderStyle>Date</DateHeaderStyle>
          ) : (
            <DateHeaderStyle>Дата</DateHeaderStyle>
          )}
          {lang === 'en' ? (
            <DescriptionHeaderStyle>Description</DescriptionHeaderStyle>
          ) : (
            <DescriptionHeaderStyle>Опис</DescriptionHeaderStyle>
          )}
          {lang === 'en' ? (
            <CategoryHeaderStyle>Category</CategoryHeaderStyle>
          ) : (
            <CategoryHeaderStyle>Категорія</CategoryHeaderStyle>
          )}
          {lang === 'en' ? (
            <AmountHeaderStyle>Sum</AmountHeaderStyle>
          ) : (
            <AmountHeaderStyle>Сума</AmountHeaderStyle>
          )}
        </ListHeaderItems>
        <List>
          {transactions[type].length !== 0 &&
            sortTransactions(transactions[type]).map(operation => {
              return (
                <ListItems key={operation._id}>
                  <DataWrapper>
                    <DescriptionStyleMobileWrapper>
                      <DescriptionStyle>
                        {operation.description.split(' ').slice(0, 2).join(' ')}
                      </DescriptionStyle>
                    </DescriptionStyleMobileWrapper>
                    <DateDescrWrapper>
                      <DateStyle>{getParseDate(operation.date)}</DateStyle>
                      <DescriptionStyleTabletWrapper>
                        <DescriptionStyle>
                          {operation.description}
                        </DescriptionStyle>
                      </DescriptionStyleTabletWrapper>
                      {lang === 'en' ? (
                        <CategoryStyle>
                          {wordTranslator(operation.category)}
                        </CategoryStyle>
                      ) : (
                        <CategoryStyle>
                          {wordTranslatorUK(operation.category)}
                        </CategoryStyle>
                      )}
                    </DateDescrWrapper>
                  </DataWrapper>
                  <AmountWrapper>
                    {lang === 'en' ? (
                      <AmountStyle type={type}>
                        {type === 'expense' && '-'}{' '}
                        {formattingSum(operation.amount)} UAH
                      </AmountStyle>
                    ) : (
                      <AmountStyle type={type}>
                        {type === 'expense' && '-'}{' '}
                        {formattingSum(operation.amount)} ГРН
                      </AmountStyle>
                    )}
                    <BtnForRemove
                      type="button"
                      onClick={() => {
                        dispatch(
                          removeTransaction({ id: operation._id, type })
                        );
                      }}
                    >
                      <SvgBoxStyle>
                        <use href={`${svg}#delete`} />
                      </SvgBoxStyle>{' '}
                    </BtnForRemove>
                  </AmountWrapper>
                </ListItems>
              );
            })}
        </List>
      </BoxForList>
    </>
  );
}

export default TransactionsList;

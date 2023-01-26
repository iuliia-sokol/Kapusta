import { useSelector } from 'react-redux';
import svg from '../../images/icons_sprite.svg';
import styledComponents from 'components/Expenses/styleExpenses';
import { Chart } from 'components/Chart/Chart';
import { useState } from 'react';
import { formattingSum } from 'utils/formattingSum';
import { getLang } from 'redux/lang/langSelectors';

const {
  ListOfBalanceChanges,
  ItemOfBalanceChanges,
  TitleOfBalanceChanges,
  SvgBoxStyle,
  BtnToggleStats,
  BoxForSvg,
  BoxStats,
  BoxForSchedule,
  Sum,
} = styledComponents;

const Income = ({ onClick }) => {
  const statistics = useSelector(state => state.statistics.statistics);
  const [filter, setFilter] = useState();
  const lang = useSelector(getLang).lang;

  if (!statistics) {
    return (
      <BoxStats>
        {lang === 'en' ? (
          <TitleOfBalanceChanges>No data to display</TitleOfBalanceChanges>
        ) : (
          <TitleOfBalanceChanges>
            Наразі немає даних для відображення
          </TitleOfBalanceChanges>
        )}
      </BoxStats>
    );
  }

  const {
    incomes: {
      incomesData: {
        // eslint-disable-next-line no-useless-computed-key
        ['З/П']: salary,
        // eslint-disable-next-line no-useless-computed-key
        ['Доп. доход']: income,
      },
      incomeTotal,
    },
  } = statistics.data;

  const onItemClick = event => {
    setFilter(event.currentTarget.id);
  };
  const filtredData = () => {
    const data = statistics.data.incomes.incomesData;

    if (!data) return;
    if (!filter) return;

    const [, incomes] = Object.entries(data).filter(
      el => el[0] === filter
    )[0] || [null, false];

    const res = Object.entries(incomes)
      .filter(el => {
        return el[0] !== 'total';
      })
      .map(el => {
        return { name: el[0], cost: el[1] };
      });

    if (res.length === 0) {
      return null;
    }
    return res;
  };

  return (
    <>
      <BoxStats>
        <div>
          <BtnToggleStats type="button" onClick={onClick}>
            <svg width="10" height="10">
              <use href={`${svg}#arrow_left`} />
            </svg>
          </BtnToggleStats>
          {lang === 'en' ? (
            <TitleOfBalanceChanges>Income</TitleOfBalanceChanges>
          ) : (
            <TitleOfBalanceChanges>Прибутки</TitleOfBalanceChanges>
          )}

          <BtnToggleStats type="button" onClick={onClick}>
            <svg width="10" height="10">
              <use href={`${svg}#arrow_right`} />
            </svg>
          </BtnToggleStats>
        </div>
        {incomeTotal ? (
          <ListOfBalanceChanges>
            {salary && (
              <ItemOfBalanceChanges onClick={onItemClick} id="З/П">
                <Sum>{formattingSum(salary.total)}</Sum>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#salary`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                {lang === 'en' ? <p>Salary</p> : <p>Зарплата</p>}
              </ItemOfBalanceChanges>
            )}
            {income && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Доп. доход">
                <Sum>{formattingSum(income.total)}</Sum>
                <BoxForSvg>
                  <SvgBoxStyle>
                    <use href={`${svg}#income`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                {lang === 'en' ? (
                  <p>Additional income</p>
                ) : (
                  <p>Додатковий дохід</p>
                )}
              </ItemOfBalanceChanges>
            )}
          </ListOfBalanceChanges>
        ) : lang === 'en' ? (
          <TitleOfBalanceChanges>No data to display</TitleOfBalanceChanges>
        ) : (
          <TitleOfBalanceChanges>
            Наразі немає даних для відображення
          </TitleOfBalanceChanges>
        )}
      </BoxStats>
      {filtredData() && (
        <BoxForSchedule>
          <Chart data={filtredData()} />
        </BoxForSchedule>
      )}
    </>
  );
};

export default Income;

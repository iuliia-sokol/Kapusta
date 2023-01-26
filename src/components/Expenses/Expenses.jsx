import { useSelector } from 'react-redux';
import svg from '../../images/icons_sprite.svg';
import styledComponents from './styleExpenses';

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

const Expenses = ({ onClick }) => {
  const [filter, setFilter] = useState('');
  const statistics = useSelector(state => state.statistics.statistics);
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

  const onItemClick = event => {
    setFilter(event.currentTarget.id);
  };
  const filtredData = () => {
    if (!filter) return;

    const data = statistics.data.expenses.expensesData;

    const [, expenses] = Object.entries(data).filter(el => {
      return el[0] === filter;
    })[0] || [null, false];

    const res = Object.entries(expenses)
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

  const {
    expenses: {
      expensesData: {
        Продукты: products,
        Алкоголь: alcohol,
        Развлечения: entertainment,
        Здоровье: health,
        Транспорт: transport,
        // eslint-disable-next-line no-useless-computed-key
        ['Всё для дома']: housing,
        Техника: technique,
        // eslint-disable-next-line no-useless-computed-key
        ['Коммуналка и связь']: communal,
        // eslint-disable-next-line no-useless-computed-key
        ['Спорт и хобби']: hobbies,
        Образование: education,
        Прочее: other,
      },
      expenseTotal,
    },
  } = statistics.data;

  return (
    <>
      <BoxStats>
        <div>
          <BtnToggleStats type="button">
            <svg width="10" height="10" onClick={onClick}>
              <use href={`${svg}#arrow_left`} />
            </svg>
          </BtnToggleStats>
          {lang === 'en' ? (
            <TitleOfBalanceChanges>Expenses</TitleOfBalanceChanges>
          ) : (
            <TitleOfBalanceChanges>Витрати</TitleOfBalanceChanges>
          )}

          <BtnToggleStats type="button" onClick={onClick}>
            <svg width="10" height="10">
              <use href={`${svg}#arrow_right`} />
            </svg>
          </BtnToggleStats>
        </div>

        {expenseTotal ? (
          <ListOfBalanceChanges>
            {products && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Продукты">
                <Sum>{formattingSum(products.total)}</Sum>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#products`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                {lang === 'en' ? <p>Products</p> : <p>Продукти</p>}
              </ItemOfBalanceChanges>
            )}
            {alcohol && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Алкоголь">
                <Sum>{formattingSum(alcohol.total)}</Sum>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#alcohol`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                {lang === 'en' ? <p>Alcohol</p> : <p>Алкоголь</p>}
              </ItemOfBalanceChanges>
            )}
            {entertainment && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Развлечения">
                <Sum>{formattingSum(entertainment.total)}</Sum>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#entertainment`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                {lang === 'en' ? <p>Entertainment</p> : <p>Розваги</p>}
              </ItemOfBalanceChanges>
            )}
            {health && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Здоровье">
                <Sum>{formattingSum(health.total)}</Sum>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#health`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                {lang === 'en' ? <p>Health</p> : <p>Здоров'я</p>}
              </ItemOfBalanceChanges>
            )}
            {transport && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Транспорт">
                <Sum>{formattingSum(transport.total)}</Sum>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#transport`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                {lang === 'en' ? <p>Transport</p> : <p>Транспорт</p>}
              </ItemOfBalanceChanges>
            )}
            {housing && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Всё для дома">
                <Sum>{formattingSum(housing.total)}</Sum>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#housing`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                {lang === 'en' ? <p>Housing</p> : <p>Господарство</p>}
              </ItemOfBalanceChanges>
            )}
            {technique && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Техника">
                <Sum>{formattingSum(technique.total)}</Sum>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#technique`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                {lang === 'en' ? <p>Technique</p> : <p>Техніка</p>}
              </ItemOfBalanceChanges>
            )}
            {communal && (
              <ItemOfBalanceChanges
                onClick={onItemClick}
                id="Коммуналка и связь"
              >
                <Sum>{formattingSum(communal.total)}</Sum>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#communal`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                {lang === 'en' ? (
                  <p>Communal, communication</p>
                ) : (
                  <p>Комуналка, зв'язок</p>
                )}
              </ItemOfBalanceChanges>
            )}
            {hobbies && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Спорт и хобби">
                <Sum>{formattingSum(hobbies.total)}</Sum>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#hobbies`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                {lang === 'en' ? <p>Sports, hobbies</p> : <p>Спорт, хобі</p>}
              </ItemOfBalanceChanges>
            )}
            {education && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Образование">
                <Sum>{formattingSum(education.total)}</Sum>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#education`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                {lang === 'en' ? <p>Education</p> : <p>Освіта</p>}
              </ItemOfBalanceChanges>
            )}
            {other && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Прочее">
                <Sum>{formattingSum(other.total)}</Sum>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#other`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                {lang === 'en' ? <p>Other</p> : <p>Інше</p>}
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

export default Expenses;

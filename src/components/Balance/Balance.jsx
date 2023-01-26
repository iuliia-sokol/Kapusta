import React from 'react';
import { BalanceContainer, StyledLink, ReportsSvg } from './Balance.styled';
import svg from '../../images/icons_sprite.svg';
import { MemoizedBalanceForm } from './BalanceForm';
import { getLang } from 'redux/lang/langSelectors';
import { useSelector } from 'react-redux';

export function Balance() {
  const lang = useSelector(getLang).lang;
  return (
    <BalanceContainer>
      <MemoizedBalanceForm page="wallet" btnDisplay={true} />
      <StyledLink to="/statistics">
        {lang === 'en' ? <p>Reports</p> : <p>Звіти</p>}
        <ReportsSvg>
          <use href={`${svg}#reports`}></use>
        </ReportsSvg>
      </StyledLink>
    </BalanceContainer>
  );
}

export const MemoizedBalanceBar = React.memo(Balance);

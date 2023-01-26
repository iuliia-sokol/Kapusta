import React from 'react';
import { BalanceContainer, StyledLink, ReportsSvg } from './Balance.styled';
import svg from '../../images/icons_sprite.svg';
import { MemoizedBalanceForm } from './BalanceForm';

export function Balance() {
  return (
    <BalanceContainer>
      <MemoizedBalanceForm page="wallet" btnDisplay={true} />
      <StyledLink to="/statistics">
        Reports
        <ReportsSvg>
          <use href={`${svg}#reports`}></use>
        </ReportsSvg>
      </StyledLink>
    </BalanceContainer>
  );
}

export const MemoizedBalanceBar = React.memo(Balance);

import { useState } from 'react';
import {
  Container,
  Box,
  TabLink,
  Outlet,
  TransactWrapper,
  SummaryWrapper,
  ContentWrapper,
} from './styled';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import InputTransactionForm from 'components/InputTransactionForm/InputTransactionForm';
import Summary from 'components/Summary/Summary';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTab1 = () => {
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    setActiveTab('tab2');
  };
  return (
    <Container>
      <Box>
        <TabLink
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={handleTab1}
        >
          Expenses
        </TabLink>
        <TabLink
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={handleTab2}
        >
          income
        </TabLink>
      </Box>

      <Outlet>
        {activeTab === 'tab1' ? (
          <>
            <InputTransactionForm type="expense" />
            <ContentWrapper>
              <TransactWrapper>
                <TransactionsList type="expense" />
              </TransactWrapper>
              <SummaryWrapper>
                <Summary />
              </SummaryWrapper>
            </ContentWrapper>
          </>
        ) : (
          <>
            <InputTransactionForm type="income" />
            <ContentWrapper>
              <TransactWrapper>
                <TransactionsList type="income" />
              </TransactWrapper>
              <SummaryWrapper>
                <Summary />
              </SummaryWrapper>
            </ContentWrapper>
          </>
        )}
      </Outlet>
    </Container>
  );
};

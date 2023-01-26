import { MemoizedBalanceBar } from 'components/Balance/Balance';
import Notiflix from 'notiflix';
import { Tabs } from 'components/WalletTabs/WalletTabs';

import { Container, AnimationWrapper, AnimatedCabbages } from './Wallet.styled';
import {
  ImageWrapper,
  Particles,
} from 'components/AnimatedBg/AnimatedBg.styled';
import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/transactions/transactionsSelectors';
import { useEffect } from 'react';
import { notifySettings } from 'utils/notifySettings';

const WalletPage = ({ isHintShown, setIsHintShown }) => {
  const savedBalance = Number(useSelector(selectBalance)).toFixed(2);

  useEffect(() => {
    if (isHintShown) {
      return;
    }
    if (savedBalance < 0) {
      Notiflix.Notify.info(
        `&#9757; Oops, you have negative balance`,
        notifySettings
      );
      setIsHintShown(true);
    }
  }, [isHintShown, savedBalance, setIsHintShown]);

  return (
    <Container>
      <ImageWrapper />
      <MemoizedBalanceBar />
      <Tabs />

      <AnimatedCabbages />
      <AnimationWrapper>
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
      </AnimationWrapper>
    </Container>
  );
};

export default WalletPage;

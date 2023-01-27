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
import { getLang } from 'redux/lang/langSelectors';

const WalletPage = ({ isHintShown, setIsHintShown }) => {
  const savedBalance = Number(useSelector(selectBalance)).toFixed(2);
  const lang = useSelector(getLang).lang;

  useEffect(() => {
    if (isHintShown) {
      return;
    }
    if (savedBalance < 0) {
      lang === 'en'
        ? Notiflix.Notify.info(
            `&#9757; Oops, you have negative balance`,
            notifySettings
          )
        : Notiflix.Notify.info(
            `&#9757; Ой, у вас негативний баланс`,
            notifySettings
          );
      setIsHintShown(true);
    }
  }, [isHintShown, lang, savedBalance, setIsHintShown]);

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

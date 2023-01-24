import { Balance } from 'components/Balance/Balance';
import { Tabs } from 'components/WalletTabs/WalletTabs';

import { Container, AnimationWrapper, AnimatedCabbages } from './Wallet.styled';
import {
  ImageWrapper,
  Particles,
} from 'components/AnimatedBg/AnimatedBg.styled';

const WalletPage = () => {
  return (
    <Container>
      <ImageWrapper />
      <Balance />
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

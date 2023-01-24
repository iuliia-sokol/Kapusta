import styled from 'styled-components';

import { Container, AnimationWrapper } from './Wallet.styled';

export const ContainerStats = styled(Container)`
  @media screen and (min-width: 768px) {
    padding: 49px 32px 350px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 91px 270px 91px;
  }
`;

export const AnimationWrapperStats = styled(AnimationWrapper)`
  @media screen and (min-width: 1280px) {
    height: 50vh;
    width: 100%;
    z-index: -100000;
  }
`;

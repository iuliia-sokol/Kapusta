import { ImageWrapperBottom } from 'components/AnimatedCabbagesBottom/AnimatedCabbagesBottom.styled';
import styled from 'styled-components';

export const AnimatedCabbages = styled(ImageWrapperBottom)`
  bottom: 60px;
  right: 5%;
  left: unset;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

// export const SummaryWrapper = styled.div`
//   display: none;

//   @media screen and (min-width: 768px) {
//     display: flex;
//     position: absolute;
//     bottom: 60px;
//   }
//   @media screen and (min-width: 1280px) {
//     display: none;
//   }
// `;

export const Container = styled.main`
  position: relative;
  overflow: hidden;
  padding: 40px 20px 160px 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */

  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 49px 32px 270px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 91px 270px 91px;
  }
`;

export const AnimationWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1000;
    height: 100vh;
    width: 100%;
  }
`;

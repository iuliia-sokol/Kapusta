import styled from 'styled-components';

export const NotificationContainer = styled.div`
  position: absolute;
  z-index: 1000;

  @media screen and (min-width: 480px) {
    transform: translateY(80px);
  }

  @media screen and (min-width: 768px) {
    transform: translateY(0px);
  }
`;

export const Triangle = styled.div`
  position: absolute;
  top: -11px;
  left: 46.36px;
  height: 12px;
  width: 26px;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  clip-path: polygon(100% 100%, 0 100%, 50% 0);
`;

export const StyledWindow = styled.div`
  display: block;
  width: 280px;
  box-sizing: border-box;
  position: relative;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  padding: 29px 29.59px;
  border-radius: 30px;
  margin-top: 13px;
  opacity: 0;
  transition: opacity 600ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    height: 152px;
    width: 288px;
    /* display: none; */
  }
`;

export const NotificationText = styled.p`
  font-size: 14px;
  line-height: 1.43;
  text-align: left;
  color: white;
  margin: 0;
  margin-bottom: 20px;
`;

export const NotificationSubText = styled.p`
  font-size: 12px;
  line-height: 1.33;
  color: white;
  margin: 0;
`;

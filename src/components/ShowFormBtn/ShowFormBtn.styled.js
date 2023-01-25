import styled from 'styled-components';

export const ShowFormBtn = styled.button`
  /* width: 30px;
  height: 30px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.PrimaryOrange};
  position: absolute;
  /* z-index: ; */
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  border-radius: 50%;
  padding: 8px;
  /* border-bottom-left-radius: 16px;
  border-top-right-radius: 16px; */
  color: ${p => p.theme.colors.PrimaryWhite};
  border: 2px solid ${props => props.theme.colors.btnsBorder};
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));

  & svg {
    width: 16px;
    height: 16px;
  }

  &:active {
    /* border-bottom-right-radius: 16px;
    border-top-left-radius: 16px; */
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & svg {
    fill: ${p => p.theme.colors.iconsFill};
    transition: fill 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg,
  &:focus svg {
    fill: ${p => p.theme.colors.PrimaryOrange};
  }
`;

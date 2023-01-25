import { BarChart } from 'recharts';
import styled from 'styled-components';

export const StyledBar = styled(BarChart)`
  & .recharts-label-list text {
    color: ${p => p.theme.colors.PrimaryBlack};
  }
`;

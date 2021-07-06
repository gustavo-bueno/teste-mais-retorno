import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Box).attrs({
  display: 'flex',
  height: '100vh',
})`
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const WelcomeUserMessage = styled.p`
  margin-top: 8px;
  line-height: 20px;
`;

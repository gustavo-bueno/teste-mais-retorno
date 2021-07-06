import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const InfoText = styled.p`
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  font-size: 14px;
  line-height: 28px;
`;

export const LinkContainer = styled.a`
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
`;

export const BackButtonText = styled.p`
  font-size: 1.125rem;
  text-align: center;
`;

export const OtherSocialMediaText = styled.span`
  background-color: var(--white);
  padding-left: 8px;
  padding-right: 8px;
`;

export const Container = styled(Box).attrs({
  height: '100vh',
  width: '100vw',
  display: 'flex',
})`
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const SocialMediaIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const AlreadyIsSignedText = styled.p`
  text-align: center;
  font-size: 20px;
  margin-top: 1rem;
`;

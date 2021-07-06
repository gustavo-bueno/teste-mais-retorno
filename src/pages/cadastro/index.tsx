import React, { useContext } from 'react';
import { Box } from '@material-ui/core';
import { useRouter } from 'next/router';

import { Banner } from '../../components/Banner';
import { Button } from '../../components/Button';
import Form from './form';
import { UserContext } from '../../contexts/userContext';
import { IUser } from '../../models/user.model';
import {
  AlreadyIsSignedText,
  BackButtonText,
  Container,
  InfoText,
  LinkContainer,
  OtherSocialMediaText,
  SocialMediaIcon,
} from './styles';
import { BannerContainer } from '../../components/Banner/styles';

export default function Home() {
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const onSubmitted = (data: IUser) => {
    setUser(data);
    router.push('/sucesso');
  };

  return (
    <Container>
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <Box
        display="flex"
        flexDirection="column"
        padding="2rem"
        flex={1}
        height="100%"
      >
        <h1 style={{ fontSize: '2.245rem' }}>Crie sua conta grátis</h1>
        <InfoText>
          Sincronize suas transações na plataforma e acompanhe a performance da
          sua carteira diariamente
        </InfoText>
        <Form onSubmitted={onSubmitted} />
        <LinkContainer>
          <BackButtonText>
            <strong>Voltar</strong>
          </BackButtonText>
        </LinkContainer>
        <Box
          marginTop="1rem"
          display="flex"
          flexDirection="column"
          justifyItems="center"
        >
          <Box
            textAlign="center"
            fontSize="20px"
            lineHeight="32px"
            height="16px"
            borderColor="#e7e7e7"
            borderBottom={1}
          >
            <OtherSocialMediaText>
              Ou cadastre-se com sua rede social
            </OtherSocialMediaText>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            paddingTop="2rem"
          >
            <Box width="125px">
              <Button
                title="GOOGLE"
                endIcon={
                  <SocialMediaIcon
                    src="images/google.svg"
                    alt="Logo do Google"
                  />
                }
              />
            </Box>
            <Box width="140px">
              <Button
                title="FACEBOOK"
                endIcon={
                  <SocialMediaIcon
                    src="images/facebook.svg"
                    alt="Logo do facebook"
                  />
                }
              />
            </Box>
          </Box>
          <AlreadyIsSignedText>
            Já possui cadastro?
            <a href="https://maisretorno.com/login">
              <strong> Faça a login!</strong>
            </a>
          </AlreadyIsSignedText>
        </Box>
      </Box>
    </Container>
  );
}

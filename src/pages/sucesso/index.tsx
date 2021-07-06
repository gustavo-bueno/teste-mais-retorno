import React, { useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { Box } from '@material-ui/core';

import { Banner } from '../../components/Banner';
import { Button } from '../../components/Button';
import { UserContext } from '../../contexts/userContext';
import { Container, WelcomeUserMessage } from './styles';
import { BannerContainer } from '../../components/Banner/styles';

export default function SuccessPage() {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      Router.push('/cadastro');
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div />;
  }

  return (
    <Container>
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <Box
        height="100%"
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        padding="1rem"
        flex={1}
      >
        <div>
          <h1>Cadastro realizado com sucesso!</h1>
          <WelcomeUserMessage>
            Seja bem vindo <strong>{user.firstName}</strong>.
          </WelcomeUserMessage>
          <p>Aqui você encontrará tudo que precisa para investir melhor.</p>
        </div>
        <Button title="Acessar conta" />
      </Box>
    </Container>
  );
}

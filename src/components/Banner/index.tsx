import React from 'react';
import { Arrows, BannerContainer, Container, Logo, Title } from './styles';

export function Banner() {
  return (
    <Container>
      <div className="bannerContent">
        <Logo />
        <Arrows className="arrowsSvg" />
        <Title>
          Tudo o que você precisa para investir melhor em um só lugar.
        </Title>
      </div>
    </Container>
  );
}

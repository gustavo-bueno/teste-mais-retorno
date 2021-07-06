import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--dark-blue);
  height: 100%;
  width: 100%;
  padding: 40px 5rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 1080px) {
    .arrowsSvg,
    h1 {
      display: none;
    }
    padding: 0.25rem;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .bannerContent {
    display: flex;
    height: 75%;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  color: var(--green);
`;

export const Logo = styled.img.attrs({
  src: '/images/logo.svg',
  alt: 'Logo da mais retorno',
})`
  width: 135px;
  height: 35px;
`;

export const Arrows = styled.img.attrs({
  src: '/images/setas.svg',
  alt: 'Setas',
})`
  width: 240px;
  height: 200px;
`;

export const BannerContainer = styled.div`
  width: 60%;
  height: 100%;
  @media (max-width: 1080px) {
    min-height: 50px;
    width: 100%;
  }
`;

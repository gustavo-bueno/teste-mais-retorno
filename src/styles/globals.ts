import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --white: #fff;
  --green: #1ddd58;
  --dark-blue: #0f132a;
  --text: #0f132a;
}
html,
body,
h1,
p,
a {
  font-family: 'Open sans', sans-serif;
  color: var(--text);
}

body {
  height: 100vh;
  width: 100vw;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

a {
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}

`;

import { theme } from './Layout';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout"
// import { useEffect, useState } from 'react';

export const App = () => {
  return (
<ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <div>React</div>
        </Layout>
      </ThemeProvider>
  );
};

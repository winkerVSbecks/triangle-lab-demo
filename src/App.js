import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Catalogue } from './Catalogue';
import theme from './theme.json';

export const App = props => (
  <ThemeProvider theme={theme}>
    <Catalogue />
  </ThemeProvider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';

import App from './App';
import { theme } from './assets/styles/theme';

const $root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot($root).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

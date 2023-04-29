import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';
import { GlobalStyle, defaultTheme } from './styles';

import { Header } from './components/Header';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <Header />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

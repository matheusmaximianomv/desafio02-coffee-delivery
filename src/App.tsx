import { ThemeProvider } from 'styled-components';

import { GlobalStyle, defaultTheme } from './styles';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Coffee Delivery</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}

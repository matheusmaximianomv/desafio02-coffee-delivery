import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';
import { GlobalStyle, defaultTheme } from './styles';
import { ProductsContextProvider } from './contexts/products/ProductsContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProductsContextProvider>
          <Router />
        </ProductsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

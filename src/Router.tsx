import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { ProductsContext } from './contexts/products/ProductsContext';

import { Home } from './pages/Home';
import { Order } from './pages/Order';
import { Confirmation } from './pages/Confirmation';

export function Router() {
  const { productsSelected, address, payment } = useContext(ProductsContext);

  function elementPathConfirmationByAccess(): JSX.Element {
    const allDataValid = !!(productsSelected.length && address && payment);

    return allDataValid ? <Confirmation /> : <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route
          path="/confirmation"
          element={elementPathConfirmationByAccess()}
        />
      </Route>
    </Routes>
  );
}

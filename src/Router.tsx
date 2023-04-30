import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';

import { Home } from './pages/Home';
import { Order } from './pages/Order';
import { Confirmation } from './pages/Confirmation';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Route>
    </Routes>
  );
}

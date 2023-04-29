import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Order } from './pages/Order';
import { Confirmation } from './pages/Confirmation';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

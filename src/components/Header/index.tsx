import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCart, MapPin } from 'phosphor-react';

import { ProductsContext } from '../../contexts/products/ProductsContext';

import logoCoffeeDelivery from '../../assets/logo.svg';
import { Button } from '../Button';

import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderActions,
  HeaderLocation,
} from './styles';

export function Header() {
  const { productsSelected } = useContext(ProductsContext);

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" title="Home">
          <HeaderLogo src={logoCoffeeDelivery} alt="Logo" />
        </NavLink>

        <HeaderActions>
          <HeaderLocation>
            <MapPin size={22} weight="fill" />
            <span>Juazeiro do norte, CE</span>
          </HeaderLocation>
          <NavLink to="/order" title="Carrinho">
            <Button variant="simple" size="sm" badge={productsSelected.length}>
              <ShoppingCart size={22} weight="fill" />
            </Button>
          </NavLink>
        </HeaderActions>
      </HeaderContent>
    </HeaderContainer>
  );
}

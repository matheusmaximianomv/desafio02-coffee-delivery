import { NavLink } from 'react-router-dom';
import { ShoppingCart, MapPin } from 'phosphor-react';

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
            <Button variant="simple" size="sm" badge={3}>
              <ShoppingCart size={22} weight="fill" />
            </Button>
          </NavLink>
        </HeaderActions>
      </HeaderContent>
    </HeaderContainer>
  );
}

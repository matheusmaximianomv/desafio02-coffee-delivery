import { Trash } from 'phosphor-react';

import { formatPrice } from '../../utils/formatPrice';

import { Counter } from '../Counter';
import { Button } from '../Button';

import {
  CartCardContainer,
  CartCardInfo,
  CartCardImage,
  CartCardDetails,
  CartCardDetailsTitle,
  CartCardDetailsActions,
  CartCardPrice,
} from './styles';

export interface ICartCardProps {
  coffeeImage: string;
  name: string;
  price: number;
  initialQuantity: number;
}

export function CartCard({
  coffeeImage,
  name,
  price,
  initialQuantity,
}: ICartCardProps) {
  let quantity = 0;

  function handleChangeQuantity(value: number) {
    quantity = value;
  }

  function handleRemoveItem(): void {
    alert(quantity);
  }

  return (
    <CartCardContainer>
      <CartCardInfo>
        <CartCardImage src={coffeeImage} alt="icone" />

        <CartCardDetails>
          <CartCardDetailsTitle>{name}</CartCardDetailsTitle>

          <CartCardDetailsActions>
            <Counter
              value={initialQuantity}
              min={1}
              onChange={handleChangeQuantity}
            />

            <Button variant="default" size="md" onClick={handleRemoveItem}>
              <Trash size={16} />
              <span>Remover</span>
            </Button>
          </CartCardDetailsActions>
        </CartCardDetails>
      </CartCardInfo>

      <CartCardPrice>R$ {formatPrice(price)}</CartCardPrice>
    </CartCardContainer>
  );
}

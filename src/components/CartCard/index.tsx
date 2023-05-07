import { useState } from 'react';
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
  id: string;
  coffeeImage: string;
  name: string;
  price: number;
  initialQuantity: number;
  handleChangeQuantity: (id: string, value: number) => void;
  handleRemoveItem: (id: string) => void;
}

export function CartCard({
  id,
  coffeeImage,
  name,
  price,
  initialQuantity,
  handleChangeQuantity,
  handleRemoveItem,
}: ICartCardProps) {
  const [totalPrice, setTotalPrice] = useState(price * initialQuantity);

  function handleChangeCount(value: number) {
    handleChangeQuantity(id, value);
    setTotalPrice(value * price);
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
              onChange={handleChangeCount}
            />

            <Button
              variant="default"
              size="md"
              onClick={() => {
                handleRemoveItem(id);
              }}
            >
              <Trash size={16} />
              <span>Remover</span>
            </Button>
          </CartCardDetailsActions>
        </CartCardDetails>
      </CartCardInfo>

      <CartCardPrice>R$ {formatPrice(totalPrice)}</CartCardPrice>
    </CartCardContainer>
  );
}

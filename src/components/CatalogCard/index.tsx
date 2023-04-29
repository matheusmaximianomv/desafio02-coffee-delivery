import { ShoppingCartSimple } from 'phosphor-react';

import { formatPrice } from '../../utils/formatPrice';

import { Counter } from '../Counter';
import { Button } from '../Button';

import {
  CatalogCardContainer,
  CatalogImage,
  CatalogTagsContainer,
  CatalogTag,
  CatalogInfo,
  CatalogName,
  CatalogDescription,
  CatalogBuy,
  CatalogPrice,
  CatalogAction,
} from './styles';

interface IEventAddItems {
  id: string;
  price: number;
  quantity: number;
}

export interface ICatalogCardProps {
  id: string;
  coffeeImage: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
  initialQuantity: number;
  handleEventAddItemsToCart: (event: IEventAddItems) => void;
}

export function CatalogCard({
  id,
  coffeeImage,
  tags,
  name,
  description,
  price,
  initialQuantity,
  handleEventAddItemsToCart,
}: ICatalogCardProps) {
  let quantity = 0;

  function handleSetQuantity(value: number): void {
    quantity = value;
  }

  function handleAddItemsToCart(): void {
    const event: IEventAddItems = {
      id,
      price,
      quantity,
    };

    handleEventAddItemsToCart(event);
  }

  return (
    <CatalogCardContainer>
      <CatalogImage src={coffeeImage} alt="coffee" />

      <CatalogTagsContainer>
        {tags.map((tag) => (
          <CatalogTag key={tag}>{tag}</CatalogTag>
        ))}
      </CatalogTagsContainer>

      <CatalogInfo>
        <CatalogName>{name}</CatalogName>
        <CatalogDescription>{description}</CatalogDescription>
      </CatalogInfo>

      <CatalogBuy>
        <CatalogPrice>
          <span>R$</span>
          <strong>{formatPrice(price)}</strong>
        </CatalogPrice>

        <CatalogAction>
          <Counter
            value={initialQuantity}
            onChange={(currentValue) => {
              handleSetQuantity(currentValue);
            }}
          />

          <Button
            variant="secondary"
            size="sm"
            onClick={(_) => handleAddItemsToCart}
          >
            <ShoppingCartSimple size={22} color="white" weight="fill" />
          </Button>
        </CatalogAction>
      </CatalogBuy>
    </CatalogCardContainer>
  );
}

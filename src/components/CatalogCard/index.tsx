import { ShoppingCartSimple } from 'phosphor-react';

import { formatPrice } from '../../utils/formatPrice';
import { IProduct } from '../../contexts/products/ProductsContext';

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

export interface ICatalogCardProps {
  id: string;
  coffeeImage: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
  initialQuantity?: number;
  handleEventAddItemsToCart: (event: IProduct) => void;
}

export function CatalogCard({
  id,
  coffeeImage,
  tags,
  name,
  description,
  price,
  initialQuantity = 0,
  handleEventAddItemsToCart,
}: ICatalogCardProps) {
  let quantity = 0;

  function handleSetQuantity(value: number): void {
    quantity = value;
  }

  function handleAddItemsToCart(): void {
    const event: IProduct = {
      id,
      price,
      quantity,
      coffeeImage,
      tags,
      name,
      description,
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

          <Button variant="secondary" size="sm" onClick={handleAddItemsToCart}>
            <ShoppingCartSimple size={22} color="white" weight="fill" />
          </Button>
        </CatalogAction>
      </CatalogBuy>
    </CatalogCardContainer>
  );
}

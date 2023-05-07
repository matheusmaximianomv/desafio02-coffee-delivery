import { ReactNode, createContext, useState, useId } from 'react';
import { produce } from 'immer';

import { generateCatalogsCard } from './utils/generateCatalogsCard';

interface IProductsContextProviderProps {
  children: ReactNode;
}

export interface IProduct {
  id: string;
  coffeeImage: string;
  name: string;
  description: string;
  tags: string[];
  price: number;
  quantity: number;
}

interface IProductContextData {
  products: IProduct[];
  productsSelected: IProduct[];
  updateInBatchProduct: (id: string, quantity: number) => void;
  removeProduct: (id: string) => void;
}

export const ProductsContext = createContext<IProductContextData>(
  {} as IProductContextData
);

export function ProductsContextProvider({
  children,
}: IProductsContextProviderProps) {
  const [products, setProducts] = useState<IProduct[]>(
    generateCatalogsCard(useId)
  );

  const productsSelected = products.filter((product) => product.quantity > 0);

  function findIndexProductById(
    products: IProduct[],
    id: string
  ): number | undefined {
    const INDEX_TO_PRODUCT_NO_EXISTS = -1;
    const index = products.findIndex((product) => product.id === id);

    return index !== INDEX_TO_PRODUCT_NO_EXISTS ? index : undefined;
  }

  function indexIsValid(value: number | undefined): boolean {
    return typeof value === 'number';
  }

  function updateInBatchProduct(id: string, quantity: number): void {
    setProducts((state) => {
      return produce(state, (draft) => {
        const index = findIndexProductById(draft, id);

        if (indexIsValid(index)) {
          draft[index as number].quantity = quantity;
        }
      });
    });
  }

  function removeProduct(id: string): void {
    setProducts((state) => {
      return produce(state, (draft) => {
        const index = findIndexProductById(draft, id);

        if (indexIsValid(index)) {
          draft[index as number].quantity = 0;
        }
      });
    });
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        productsSelected,
        updateInBatchProduct,
        removeProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

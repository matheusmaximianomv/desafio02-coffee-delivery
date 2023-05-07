import { ReactNode, createContext, useReducer, useId } from 'react';

import {
  productReducer,
  IProduct,
  updateQuantityProductsAction,
  removeQuantityProductsAction,
} from '../../reducers/products';

import { generateCatalogsCard } from './utils/generateCatalogsCard';

interface IProductsContextProviderProps {
  children: ReactNode;
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
  const [productsState, dispatch] = useReducer(productReducer, {
    products: generateCatalogsCard(useId),
    productsSelected: [],
  });

  const { products, productsSelected } = productsState;

  function updateInBatchProduct(id: string, quantity: number): void {
    dispatch(updateQuantityProductsAction(id, quantity));
  }

  function removeProduct(id: string): void {
    dispatch(removeQuantityProductsAction(id));
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

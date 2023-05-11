import { ReactNode, createContext, useReducer, useId } from 'react';

import {
  productReducer,
  IProduct,
  IAddress,
  IPayment,
  updateQuantityProductsAction,
  removeQuantityProductsAction,
  finishPurchaseAction,
  resetCartAction,
} from '../../reducers/products';

import { generateCatalogsCard } from './utils/generateCatalogsCard';

interface IProductsContextProviderProps {
  children: ReactNode;
}

interface IProductContextData {
  products: IProduct[];
  productsSelected: IProduct[];
  address?: IAddress;
  payment?: IPayment;
  updateInBatchProduct: (id: string, quantity: number) => void;
  removeProduct: (id: string) => void;
  finishPurchase: (address: IAddress, payment: IPayment) => void;
  resetCart: () => void;
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

  const { products, productsSelected, address, payment } = productsState;

  function updateInBatchProduct(id: string, quantity: number): void {
    dispatch(updateQuantityProductsAction(id, quantity));
  }

  function removeProduct(id: string): void {
    dispatch(removeQuantityProductsAction(id));
  }

  function finishPurchase(address: IAddress, payment: IPayment): void {
    dispatch(finishPurchaseAction(address, payment));
  }

  function resetCart(): void {
    dispatch(resetCartAction());
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        productsSelected,
        address,
        payment,
        updateInBatchProduct,
        removeProduct,
        finishPurchase,
        resetCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

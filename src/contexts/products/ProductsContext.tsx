import { ReactNode, createContext, useReducer, useEffect } from 'react';
import { produce } from 'immer';

import {
  productReducer,
  IProduct,
  IAddress,
  IPayment,
  updateQuantityProductsAction,
  removeQuantityProductsAction,
  clearProductsAction,
  finishPurchaseAction,
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
  clearProducts: () => void;
  finishPurchase: (address: IAddress, payment: IPayment) => void;
}

const KEY_STORAGE = '@ignite-coffee-delivery:products-state-1.0.0';

export const ProductsContext = createContext<IProductContextData>(
  {} as IProductContextData
);

export function ProductsContextProvider({
  children,
}: IProductsContextProviderProps) {
  const [productsState, dispatch] = useReducer(
    productReducer,
    {
      products: generateCatalogsCard(),
      productsSelected: [],
    },
    (initialState) => {
      const stateJSON = localStorage.getItem(KEY_STORAGE);

      if (stateJSON) {
        const { productsSelected } = JSON.parse(
          stateJSON
        ) as IProductContextData;

        return produce(initialState, (draft) => {
          draft.products.forEach((product) => {
            const productSavedInLocalStorage = productsSelected.find(
              (productTarget) => productTarget.id === product.id
            );

            if (productSavedInLocalStorage) {
              product.quantity = productSavedInLocalStorage.quantity;
            }
          });

          (draft.productsSelected as IProduct[]) = productsSelected;
        });
      }

      return initialState;
    }
  );

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

  function clearProducts(): void {
    dispatch(clearProductsAction());
  }

  useEffect(() => {
    const productsSelectedObject = {
      productsSelected,
    };

    const stateJSON = JSON.stringify(productsSelectedObject);

    localStorage.setItem(KEY_STORAGE, stateJSON);
  }, [productsSelected]);

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
        clearProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

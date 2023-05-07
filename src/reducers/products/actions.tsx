import { EnumActionsProductReducer, IProductActionReducer } from './reducer';

export function updateQuantityProductsAction(
  id: string,
  quantity: number
): IProductActionReducer {
  return {
    type: EnumActionsProductReducer.UPDATE_QUANTITY_PRODUCTS_IN_CART,
    payload: {
      id,
      quantity,
    },
  };
}

export function removeQuantityProductsAction(
  id: string
): IProductActionReducer {
  return {
    type: EnumActionsProductReducer.UPDATE_QUANTITY_PRODUCTS_IN_CART,
    payload: {
      id,
    },
  };
}

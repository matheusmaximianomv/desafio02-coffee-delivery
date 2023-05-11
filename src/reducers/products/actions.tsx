import {
  EnumActionsProductReducer,
  IProductActionReducer,
  IAddress,
  IPayment,
} from './reducer';

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

export function finishPurchaseAction(
  address: IAddress,
  payment: IPayment
): IProductActionReducer {
  return {
    type: EnumActionsProductReducer.FINISH_PURCHASE,
    payload: {
      address,
      payment,
    },
  };
}

export function resetCartAction(): IProductActionReducer {
  return {
    type: EnumActionsProductReducer.RESET_CART,
    payload: {},
  };
}

import { produce } from 'immer';

export interface IProduct {
  id: string;
  coffeeImage: string;
  name: string;
  description: string;
  tags: string[];
  price: number;
  quantity: number;
}

interface IProductState {
  products: IProduct[];
  productsSelected: IProduct[];
}

export enum EnumActionsProductReducer {
  UPDATE_QUANTITY_PRODUCTS_IN_CART = 'UPDATE_QUANTITY_PRODUCTS_IN_CART',
  REMOVE_PRODUCT_IN_CART = 'REMOVE_PRODUCT_IN_CART',
}

interface IPayloadActionReducer {
  id: string;
  quantity?: number;
}

export interface IProductActionReducer {
  type: EnumActionsProductReducer;
  payload: IPayloadActionReducer;
}

type TypeActionsByState = Record<
  EnumActionsProductReducer,
  (state: IProductState, payload: IPayloadActionReducer) => IProductState
>;

function indexIsValid(value: number | undefined): boolean {
  return typeof value === 'number';
}

function findIndexProductById(
  products: IProduct[],
  id: string
): number | undefined {
  const INDEX_TO_PRODUCT_NO_EXISTS = -1;
  const index = products.findIndex((product) => product.id === id);

  return index !== INDEX_TO_PRODUCT_NO_EXISTS ? index : undefined;
}

function identifyProductsSelected(draft: IProductState): void {
  draft.productsSelected = draft.products.filter(
    (product) => product.quantity > 0
  );
}

function updateQuantityProducts(
  state: IProductState,
  payload: IPayloadActionReducer
): IProductState {
  return produce(state, (draft) => {
    const index = findIndexProductById(draft.products, payload.id);

    if (indexIsValid(index) && typeof payload.quantity) {
      draft.products[index as number].quantity = payload.quantity as number;
      identifyProductsSelected(draft);
    }
  });
}

function removeQuantityProducts(
  state: IProductState,
  payload: IPayloadActionReducer
): IProductState {
  return produce(state, (draft) => {
    const index = findIndexProductById(draft.products, payload.id);

    if (indexIsValid(index)) {
      draft.products[index as number].quantity = 0;
      identifyProductsSelected(draft);
    }
  });
}

export function productReducer(
  state: IProductState,
  action: IProductActionReducer
): IProductState {
  const actionsByState: TypeActionsByState = {
    UPDATE_QUANTITY_PRODUCTS_IN_CART: updateQuantityProducts,
    REMOVE_PRODUCT_IN_CART: removeQuantityProducts,
  };

  const actionFunction = actionsByState[action.type];

  if (actionFunction) {
    return actionFunction(state, action.payload);
  }

  return state;
}

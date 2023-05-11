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

export interface IAddress {
  publicPlace: string;
  number: string;
  neighborhood: string;
  city: string;
  uf: string;
  complement?: string;
}

export interface IPayment {
  id: string;
  label: string;
}

interface IProductState {
  products: IProduct[];
  productsSelected: IProduct[];
  address?: IAddress;
  payment?: IPayment;
}

export enum EnumActionsProductReducer {
  UPDATE_QUANTITY_PRODUCTS_IN_CART = 'UPDATE_QUANTITY_PRODUCTS_IN_CART',
  REMOVE_PRODUCT_IN_CART = 'REMOVE_PRODUCT_IN_CART',
  FINISH_PURCHASE = 'FINISH_PURCHASE',
  RESET_CART = 'RESET_CART',
}

interface IPayloadActionReducer {
  id?: string;
  quantity?: number;
  address?: IAddress;
  payment?: IPayment;
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
    const index = findIndexProductById(draft.products, payload.id as string);

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
    const index = findIndexProductById(draft.products, payload.id as string);

    if (indexIsValid(index)) {
      draft.products[index as number].quantity = 0;
      identifyProductsSelected(draft);
    }
  });
}

function finishPurchase(
  state: IProductState,
  { address, payment }: IPayloadActionReducer
): IProductState {
  return produce(state, (draft) => {
    if (address && payment) {
      draft.address = address;
      draft.payment = payment;
    }
  });
}

function resetCart(
  state: IProductState,
  _: IPayloadActionReducer
): IProductState {
  return produce(state, (draft) => {
    delete draft.address;
    delete draft.payment;

    draft.products.forEach((product) => (product.quantity = 0));
  });
}

export function productReducer(
  state: IProductState,
  action: IProductActionReducer
): IProductState {
  const actionsByState: TypeActionsByState = {
    UPDATE_QUANTITY_PRODUCTS_IN_CART: updateQuantityProducts,
    REMOVE_PRODUCT_IN_CART: removeQuantityProducts,
    FINISH_PURCHASE: finishPurchase,
    RESET_CART: resetCart,
  };

  const actionFunction = actionsByState[action.type];

  if (actionFunction) {
    return actionFunction(state, action.payload);
  }

  return state;
}

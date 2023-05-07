import { ReactNode, createContext, useState } from 'react';
import { produce } from 'immer';

interface IProductsContextProviderProps {
  children: ReactNode;
}

export interface IEventAddItems {
  id: string;
  price: number;
  quantity: number;
}

interface IProductContextData {
  products: IEventAddItems[];
  addUnitCoffee: (idCoffee: string) => void;
  removeUnitCoffee: (idCoffee: string) => void;
  updateInBatchCoffees: (coffee: IEventAddItems) => void;
  removeCoffee: (idCoffee: string) => void;
}

export const ProductsContext = createContext<IProductContextData>(
  {} as IProductContextData
);

export function ProductsContextProvider({
  children,
}: IProductsContextProviderProps) {
  const [products, setProducts] = useState<IEventAddItems[]>([]);

  function hasIndexCoffeeInState(id: string): number | undefined {
    const INDEX_EQUIPMENT_NO_EXISTS = -1;
    const index = products.findIndex((product) => product.id === id);

    return index !== INDEX_EQUIPMENT_NO_EXISTS ? index : undefined;
  }

  function addUnitCoffee(idCoffee: string): void {
    setProducts((state) => {
      return produce(state, (draft) => {
        const index = hasIndexCoffeeInState(idCoffee);

        if (typeof index === 'number') {
          draft[index].quantity += 1;
        }
      });
    });
  }

  function removeUnitCoffee(idCoffee: string): void {
    setProducts((state) => {
      return produce(state, (draft) => {
        const index = hasIndexCoffeeInState(idCoffee);

        if (typeof index === 'number' && draft[index].quantity !== 1) {
          draft[index].quantity -= 1;
        }
      });
    });
  }

  function deleteCoffeeFromState(
    state: IEventAddItems[],
    idCoffee: string
  ): IEventAddItems[] {
    return state.filter((currentCoffee) => currentCoffee.id !== idCoffee);
  }

  function updateInBatchCoffees(coffee: IEventAddItems): void {
    setProducts((state) => {
      if (coffee.quantity === 0) {
        return deleteCoffeeFromState(state, coffee.id);
      }

      const indexEquipment = hasIndexCoffeeInState(coffee.id);
      if (typeof indexEquipment === 'number') {
        return produce(state, (draft) => {
          draft[indexEquipment].quantity = coffee.quantity;
        });
      }

      return produce(state, (draft) => {
        draft.push(coffee);
      });
    });
  }

  function removeCoffee(idCoffee: string): void {
    setProducts((state) => {
      return deleteCoffeeFromState(state, idCoffee);
    });
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        addUnitCoffee,
        removeUnitCoffee,
        updateInBatchCoffees,
        removeCoffee,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

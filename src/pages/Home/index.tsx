import { useContext } from 'react';
import { ShoppingCart, Package, Coffee, Timer } from 'phosphor-react';

import { CatalogCard } from '../../components/CatalogCard';
import { ProductsContext } from '../../contexts/products/ProductsContext';
import { IProduct } from '../../reducers/products';
import coffeeImg from '../../assets/coffee.svg';

import {
  HomeIntroduction,
  HomeIntroductionContent,
  HomePresentation,
  HomeTitle,
  HomeList,
  HomeListItem,
  HomeImage,
  HomeCoffeeList,
  HomeCoffeeListContent,
  HomeCoffeeListTitle,
  HomeCoffeeListOptions,
} from './styles';

export function Home() {
  const { products, updateInBatchProduct } = useContext(ProductsContext);

  function handleChooseQuantityCard(event: IProduct): void {
    updateInBatchProduct(event.id, event.quantity);
    alert(`O produto ${event.name} foi atualizado com sucesso!!`);
  }

  return (
    <main>
      <HomeIntroduction>
        <HomeIntroductionContent>
          <HomePresentation>
            <HomeTitle>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </HomeTitle>

            <HomeList>
              <HomeListItem variant="yellow-700">
                <div>
                  <ShoppingCart size={16} weight="fill" />
                </div>
                <span>Compra simples e segura</span>
              </HomeListItem>
              <HomeListItem variant="gray-600">
                <div>
                  <Package size={16} weight="fill" />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </HomeListItem>
              <HomeListItem variant="yellow-500">
                <div>
                  <Timer size={16} weight="fill" />
                </div>
                <span>Entrega rápida e rastreada</span>
              </HomeListItem>
              <HomeListItem variant="purple-500">
                <div>
                  <Coffee size={16} weight="fill" />
                </div>
                <span>O café chega fresquinho até você</span>
              </HomeListItem>
            </HomeList>
          </HomePresentation>

          <HomeImage src={coffeeImg} />
        </HomeIntroductionContent>
      </HomeIntroduction>

      <HomeCoffeeList>
        <HomeCoffeeListContent>
          <HomeCoffeeListTitle>Nossos cafés</HomeCoffeeListTitle>

          <HomeCoffeeListOptions>
            {products.map((product) => (
              <CatalogCard
                key={product.id}
                initialQuantity={product.quantity}
                handleEventAddItemsToCart={handleChooseQuantityCard}
                {...product}
              />
            ))}
          </HomeCoffeeListOptions>
        </HomeCoffeeListContent>
      </HomeCoffeeList>
    </main>
  );
}

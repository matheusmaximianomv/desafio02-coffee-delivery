import { useId, useContext } from 'react';
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react';

import { ProductsContext } from '../../contexts/products/ProductsContext';
import { formatPrice } from '../../utils/formatPrice';

import { Input } from '../../components/Input';
import { IGroupSelectProps, GroupSelect } from '../../components/GroupSelect';
import { CartCard } from '../../components/CartCard';
import { Button } from '../../components/Button';

import {
  OrderContainer,
  OrderColumn,
  OrderTitle,
  OrderCardContainer,
  OrderCardContainerCart,
  OrderCardTitle,
  OrderCardForm,
  OrderFieldGroup,
  OrderSeparator,
  PurchaseSummaryContainer,
  PurchaseSummaryItems,
  PurchaseSummaryTotal,
  TitleNoData,
} from './styles';

export function Order() {
  const { productsSelected, updateInBatchProduct, removeProduct } =
    useContext(ProductsContext);

  const deliveryPrice = 3.5;
  const totalPriceProductsSelected = productsSelected.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  const totalDelivery = deliveryPrice + totalPriceProductsSelected;

  const groupSelectProps: IGroupSelectProps = {
    options: [
      {
        id: useId(),
        label: 'Cartão de Crédito',
        renderIcon: (color, size) => <CreditCard color={color} size={size} />,
        selected: false,
      },
      {
        id: useId(),
        label: 'Cartão de Débito',
        renderIcon: (color, size) => <Bank color={color} size={size} />,
        selected: false,
      },
      {
        id: useId(),
        label: 'Dinheiro',
        renderIcon: (color, size) => <Money color={color} size={size} />,
        selected: false,
      },
    ],
  };

  function handleChangeQuantity(id: string, value: number): void {
    updateInBatchProduct(id, value);
  }

  function handleRemoveItem(id: string): void {
    removeProduct(id);
  }

  return (
    <OrderContainer>
      <OrderColumn>
        <OrderTitle>Complete seu pedido</OrderTitle>

        <OrderCardContainer>
          <OrderCardTitle variant="yellow-700">
            <MapPinLine size={22} />

            <div>
              <strong>Endereço de Entrega</strong>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </OrderCardTitle>

          <OrderCardForm>
            <Input placeholder="CEP" width="sm" />
            <Input placeholder="Logradouro" width="xl" />

            <OrderFieldGroup>
              <Input placeholder="Número" width="sm" />
              <Input placeholder="Complemento" width="lg" optional />
            </OrderFieldGroup>

            <OrderFieldGroup>
              <Input placeholder="Bairro" width="sm" />
              <Input placeholder="Cidade" width="md" />
              <Input placeholder="UF" width="xs" />
            </OrderFieldGroup>
          </OrderCardForm>
        </OrderCardContainer>

        <OrderCardContainer>
          <OrderCardTitle variant="purple-500">
            <CurrencyDollar size={22} />

            <div>
              <strong>Pagamento</strong>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </OrderCardTitle>

          <GroupSelect options={groupSelectProps.options} />
        </OrderCardContainer>
      </OrderColumn>

      <OrderColumn>
        <OrderTitle>Cafés selecionados</OrderTitle>

        <OrderCardContainerCart>
          {productsSelected.map(
            ({ id, coffeeImage, name, price, quantity }) => (
              <div key={id}>
                <CartCard
                  id={id}
                  coffeeImage={coffeeImage}
                  name={name}
                  price={price}
                  initialQuantity={quantity}
                  handleChangeQuantity={handleChangeQuantity}
                  handleRemoveItem={handleRemoveItem}
                />
                <OrderSeparator />
              </div>
            )
          )}

          {productsSelected.length > 0 ? (
            <>
              <PurchaseSummaryContainer>
                <PurchaseSummaryItems>
                  <span>Total de itens</span>
                  <span>R$ {formatPrice(totalPriceProductsSelected)}</span>
                </PurchaseSummaryItems>

                <PurchaseSummaryItems>
                  <span>Entrega</span>
                  <span>R$ {formatPrice(deliveryPrice)}</span>
                </PurchaseSummaryItems>

                <PurchaseSummaryTotal>
                  <span>Total</span>
                  <span>R$ {formatPrice(totalDelivery)}</span>
                </PurchaseSummaryTotal>
              </PurchaseSummaryContainer>

              <Button variant="primary" size="lg">
                Confirmar Pedido
              </Button>
            </>
          ) : (
            <TitleNoData>Nenhum café foi selecionado.</TitleNoData>
          )}
        </OrderCardContainerCart>
      </OrderColumn>
    </OrderContainer>
  );
}

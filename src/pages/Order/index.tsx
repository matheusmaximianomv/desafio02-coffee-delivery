import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react';

import expressoImg from '../../assets/coffees/expresso.svg';
import latteImg from '../../assets/coffees/latte.svg';

import { Input } from '../../components/Input';
import { IGroupSelectProps, GroupSelect } from '../../components/GroupSelect';
import { ICartCardProps, CartCard } from '../../components/CartCard';
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
} from './styles';
import { useId } from 'react';

export function Order() {
  const groupSelectProps: IGroupSelectProps = {
    options: [
      {
        id: useId(),
        label: 'Cartão de Crédito',
        renderIcon: (color, size) => <CreditCard size={size} color={color} />,
        selected: false,
      },
      {
        id: useId(),
        label: 'Cartão de Débito',
        renderIcon: (color, size) => <Bank size={size} color={color} />,
        selected: false,
      },
      {
        id: useId(),
        label: 'Dinheiro',
        renderIcon: (color, size) => <Money size={size} color={color} />,
        selected: false,
      },
    ],
  };

  const coffeesSelected: ICartCardProps[] = [
    {
      coffeeImage: expressoImg,
      name: 'Expresso Tradicional',
      initialQuantity: 1,
      price: 9.9,
    },
    {
      coffeeImage: latteImg,
      name: 'Latte',
      initialQuantity: 1,
      price: 9.9,
    },
  ];

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
          {coffeesSelected.map((coffee) => (
            <>
              <CartCard key={coffee.name} {...coffee} />
              <OrderSeparator />
            </>
          ))}

          <PurchaseSummaryContainer>
            <PurchaseSummaryItems>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </PurchaseSummaryItems>

            <PurchaseSummaryItems>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </PurchaseSummaryItems>

            <PurchaseSummaryTotal>
              <span>Total</span>
              <span>R$ 33,20</span>
            </PurchaseSummaryTotal>
          </PurchaseSummaryContainer>

          <Button variant="primary" size="lg">
            Confirmar Pedido
          </Button>
        </OrderCardContainerCart>
      </OrderColumn>
    </OrderContainer>
  );
}

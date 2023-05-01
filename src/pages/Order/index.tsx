import { MapPinLine, CurrencyDollar } from 'phosphor-react';

import { Input } from '../../components/Input';

import {
  OrderContainer,
  OrderColumn,
  OrderTitle,
  OrderCardContainer,
  OrderCardTitle,
  OrderCardForm,
  OrderFieldGroup,
} from './styles';

export function Order() {
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
        </OrderCardContainer>
      </OrderColumn>

      <OrderColumn>
        <OrderTitle>Cafés selecionados</OrderTitle>

        <OrderCardContainer></OrderCardContainer>
      </OrderColumn>
    </OrderContainer>
  );
}

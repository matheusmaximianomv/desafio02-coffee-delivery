import { useContext, useEffect } from 'react';
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';

import deliveryMan from '../../assets/deliveryman.svg';

import { ProductsContext } from '../../contexts/products/ProductsContext';

import {
  ConfirmationContainer,
  ConfirmationContent,
  ConfirmationHgroup,
  ConfirmationPanel,
  ConfirmationOrderInfo,
  ConfirmationInfoContainer,
  ConfirmationInfoIcon,
  ConfirmationInfoText,
} from './styles';

export function Confirmation() {
  const { address, payment, clearProducts } = useContext(ProductsContext);

  function completeAddress(): string {
    if (address) {
      const { publicPlace, number } = address;
      return `${publicPlace}, ${number}`;
    }

    return '';
  }

  function place(): string {
    if (address) {
      const { neighborhood, city, uf } = address;
      return `${neighborhood} - ${city}, ${uf}`;
    }

    return '';
  }

  useEffect(() => {
    return () => {
      clearProducts();
    };
  }, []);

  return (
    <ConfirmationContainer>
      <ConfirmationContent>
        <ConfirmationHgroup>
          <h1>Uhu! Pedido confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
        </ConfirmationHgroup>

        <ConfirmationPanel>
          <ConfirmationOrderInfo>
            <ConfirmationInfoContainer>
              <ConfirmationInfoIcon variant="purple-500">
                <MapPin size={16} weight="fill" color="white" />
              </ConfirmationInfoIcon>

              <ConfirmationInfoText>
                <span>
                  Entrega em <strong>{completeAddress()}</strong>
                </span>
                <span>{place()}</span>
              </ConfirmationInfoText>
            </ConfirmationInfoContainer>

            <ConfirmationInfoContainer>
              <ConfirmationInfoIcon variant="yellow-500">
                <Timer size={16} weight="fill" color="white" />
              </ConfirmationInfoIcon>

              <ConfirmationInfoText>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </ConfirmationInfoText>
            </ConfirmationInfoContainer>

            <ConfirmationInfoContainer>
              <ConfirmationInfoIcon variant="yellow-700">
                <CurrencyDollar size={16} weight="fill" color="white" />
              </ConfirmationInfoIcon>

              <ConfirmationInfoText>
                <span>Pagamento na entrega</span>
                <strong>{payment ? payment.label : ''}</strong>
              </ConfirmationInfoText>
            </ConfirmationInfoContainer>
          </ConfirmationOrderInfo>

          <img src={deliveryMan} alt="Entregador" />
        </ConfirmationPanel>
      </ConfirmationContent>
    </ConfirmationContainer>
  );
}

import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';

import deliveryMan from '../../assets/deliveryman.svg';

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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
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
                <strong>Cartão de Crédito</strong>
              </ConfirmationInfoText>
            </ConfirmationInfoContainer>
          </ConfirmationOrderInfo>

          <img src={deliveryMan} alt="Entregador" />
        </ConfirmationPanel>
      </ConfirmationContent>
    </ConfirmationContainer>
  );
}

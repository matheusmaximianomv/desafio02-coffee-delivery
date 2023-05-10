import { useId, useContext, useState } from 'react';
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { ProductsContext } from '../../contexts/products/ProductsContext';
import { formatPrice } from '../../utils/formatPrice';

import { Input } from '../../components/Input';
import {
  IGroupSelectProps,
  GroupSelect,
  IGroupSelectEvent,
} from '../../components/GroupSelect';
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

const defaultValuesForm = {
  cep: '',
  publicPlace: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  uf: '',
};

const newPurchaseFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Cep Inválido.').max(9, 'Cep Inválido.'),
  publicPlace: zod.string().min(5, 'Digite um endereço válido.'),
  number: zod.string().min(1, 'Digite um número de residência válido.'),
  complement: zod.string(),
  neighborhood: zod.string().min(5, 'Digite um bairro válido.'),
  city: zod.string().min(5, 'Digite uma cidade válida.'),
  uf: zod.string().length(2, 'Digite uma união federativa válida.'),
});

type NewPurchaseFormData = zod.infer<typeof newPurchaseFormValidationSchema>;

export function Order() {
  const { productsSelected, updateInBatchProduct, removeProduct } =
    useContext(ProductsContext);

  const { register, getValues, formState } = useForm<NewPurchaseFormData>({
    defaultValues: defaultValuesForm,
    resolver: zodResolver(newPurchaseFormValidationSchema),
  });

  const [formPayment, setFormPayment] = useState<IGroupSelectEvent | null>(
    null
  );

  const deliveryPrice = 3.5;
  const totalPriceProductsSelected = productsSelected.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  const totalDelivery = deliveryPrice + totalPriceProductsSelected;

  const groupSelectProps: Pick<IGroupSelectProps, 'options'> = {
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

  const buttonIsDisabled =
    !formState.isValid || !formPayment || !productsSelected.length;

  function handleChangeQuantity(id: string, value: number): void {
    updateInBatchProduct(id, value);
  }

  function handleRemoveItem(id: string): void {
    removeProduct(id);
  }

  function handleSubmitPurchase(): void {
    if (!buttonIsDisabled) {
      console.log(getValues());
    }
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
            <Input placeholder="CEP" width="sm" required {...register('cep')} />
            <Input
              placeholder="Logradouro"
              width="xl"
              required
              {...register('publicPlace')}
            />

            <OrderFieldGroup>
              <Input
                placeholder="Número"
                width="sm"
                required
                {...register('number')}
              />
              <Input
                placeholder="Complemento"
                width="lg"
                optional
                {...register('complement')}
              />
            </OrderFieldGroup>

            <OrderFieldGroup>
              <Input
                placeholder="Bairro"
                width="sm"
                required
                {...register('neighborhood')}
              />
              <Input
                placeholder="Cidade"
                width="md"
                required
                {...register('city')}
              />
              <Input placeholder="UF" width="xs" required {...register('uf')} />
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

          <GroupSelect
            options={groupSelectProps.options}
            onChangeOption={(event) => {
              setFormPayment(event);
            }}
          />
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

              <Button
                variant="primary"
                size="lg"
                onClick={handleSubmitPurchase}
                disabled={buttonIsDisabled}
              >
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

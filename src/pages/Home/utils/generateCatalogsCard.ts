import {
  IEventAddItems,
  ICatalogCardProps,
} from '../../../components/CatalogCard';

import expressoImg from '../../../assets/coffees/expresso.svg';
import americanoImg from '../../../assets/coffees/americano.svg';
import cremosoImg from '../../../assets/coffees/expresso_cremoso.svg';
import geladoImg from '../../../assets/coffees/cafe_gelado.svg';
import cafeComLeiteImg from '../../../assets/coffees/cafe_com_leite.svg';
import latteImg from '../../../assets/coffees/latte.svg';
import capuccinoImg from '../../../assets/coffees/capuccino.svg';
import macchiatoImg from '../../../assets/coffees/macchiato.svg';
import mocaccinoImg from '../../../assets/coffees/mochaccino.svg';
import chocolateQuenteImg from '../../../assets/coffees/chocolate_quente.svg';
import cubanoImg from '../../../assets/coffees/cubano.svg';
import havaianoImg from '../../../assets/coffees/havaiano.svg';
import arabeImg from '../../../assets/coffees/arabe.svg';
import irlandes from '../../../assets/coffees/irlandes.svg';

export function generateCatalogsCard(
  hashFunction: () => string,
  handleEventClick: (event: IEventAddItems) => void
): ICatalogCardProps[] {
  const catalogOptions: ICatalogCardProps[] = [
    {
      id: hashFunction(),
      coffeeImage: expressoImg,
      tags: ['Tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.99,
      handleEventAddItemsToCart: handleEventClick,
    },
    {
      id: hashFunction(),
      coffeeImage: americanoImg,
      tags: ['Tradicional'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.99,
      handleEventAddItemsToCart: handleEventClick,
    },
    {
      id: hashFunction(),
      coffeeImage: cremosoImg,
      tags: ['Tradicional'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.99,
      handleEventAddItemsToCart: handleEventClick,
    },
    {
      id: hashFunction(),
      coffeeImage: geladoImg,
      tags: ['Tradicional', 'Gelado'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.99,
      handleEventAddItemsToCart: handleEventClick,
    },
    {
      id: hashFunction(),
      coffeeImage: cafeComLeiteImg,
      tags: ['Tradicional', 'Com Leite'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.99,
      handleEventAddItemsToCart: handleEventClick,
    },
    {
      id: hashFunction(),
      coffeeImage: latteImg,
      tags: ['Tradicional', 'Com Leite'],
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.99,
      handleEventAddItemsToCart: handleEventClick,
    },
    {
      id: hashFunction(),
      coffeeImage: capuccinoImg,
      tags: ['Tradicional', 'Com Leite'],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.99,
      handleEventAddItemsToCart: handleEventClick,
    },
    {
      id: hashFunction(),
      coffeeImage: macchiatoImg,
      tags: ['Tradicional', 'Com Leite'],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.99,
      handleEventAddItemsToCart: handleEventClick,
    },
    {
      id: hashFunction(),
      coffeeImage: mocaccinoImg,
      tags: ['Tradicional', 'Com Leite'],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.99,
      handleEventAddItemsToCart: handleEventClick,
    },
    {
      id: hashFunction(),
      coffeeImage: chocolateQuenteImg,
      tags: ['Especial', 'Com Leite'],
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.99,
      handleEventAddItemsToCart: handleEventClick,
    },
    {
      id: hashFunction(),
      coffeeImage: cubanoImg,
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.99,
      handleEventAddItemsToCart: handleEventClick,
    },
    {
      id: hashFunction(),
      coffeeImage: havaianoImg,
      tags: ['Especial'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.99,
      handleEventAddItemsToCart: handleEventClick,
    },
    {
      id: hashFunction(),
      coffeeImage: arabeImg,
      tags: ['Especial'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.99,
      handleEventAddItemsToCart: handleEventClick,
    },
    {
      id: hashFunction(),
      coffeeImage: irlandes,
      tags: ['Especial', 'Alcoólico'],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.99,
      handleEventAddItemsToCart: handleEventClick,
    },
  ];

  return catalogOptions;
}

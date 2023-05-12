import { IProduct } from '../../../reducers/products';

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

export function generateCatalogsCard(): IProduct[] {
  const catalogOptions: IProduct[] = [
    {
      id: '1',
      coffeeImage: expressoImg,
      tags: ['Tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.99,
      quantity: 0,
    },
    {
      id: '2',
      coffeeImage: americanoImg,
      tags: ['Tradicional'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.99,
      quantity: 0,
    },
    {
      id: '3',
      coffeeImage: cremosoImg,
      tags: ['Tradicional'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.99,
      quantity: 0,
    },
    {
      id: '4',
      coffeeImage: geladoImg,
      tags: ['Tradicional', 'Gelado'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.99,
      quantity: 0,
    },
    {
      id: '5',
      coffeeImage: cafeComLeiteImg,
      tags: ['Tradicional', 'Com Leite'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.99,
      quantity: 0,
    },
    {
      id: '6',
      coffeeImage: latteImg,
      tags: ['Tradicional', 'Com Leite'],
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.99,
      quantity: 0,
    },
    {
      id: '7',
      coffeeImage: capuccinoImg,
      tags: ['Tradicional', 'Com Leite'],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.99,
      quantity: 0,
    },
    {
      id: '8',
      coffeeImage: macchiatoImg,
      tags: ['Tradicional', 'Com Leite'],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.99,
      quantity: 0,
    },
    {
      id: '9',
      coffeeImage: mocaccinoImg,
      tags: ['Tradicional', 'Com Leite'],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.99,
      quantity: 0,
    },
    {
      id: '10',
      coffeeImage: chocolateQuenteImg,
      tags: ['Especial', 'Com Leite'],
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.99,
      quantity: 0,
    },
    {
      id: '11',
      coffeeImage: cubanoImg,
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.99,
      quantity: 0,
    },
    {
      id: '12',
      coffeeImage: havaianoImg,
      tags: ['Especial'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.99,
      quantity: 0,
    },
    {
      id: '13',
      coffeeImage: arabeImg,
      tags: ['Especial'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.99,
      quantity: 0,
    },
    {
      id: '14',
      coffeeImage: irlandes,
      tags: ['Especial', 'Alcoólico'],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.99,
      quantity: 0,
    },
  ];

  return catalogOptions;
}

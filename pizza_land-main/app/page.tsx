'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Pizza } from '@/components/card';
import { Banner } from '@/components/banner';
import { Footer } from '@/components/footer';
import { CartDesktop } from '@/components/cart';
import { PizzaType } from '@/types/types';

export default function Home() {
  // Lista estática de pizzas para demonstração
  const pizzas: PizzaType[] = [
    {
      id: 1,
      name: 'Marguerita',
      description: 'Pizza clássica com molho de tomate, mussarela e manjericão fresco',
      priceLg: 89.90,
      priceMd: 79.90,
      priceSm: 69.90,
      image: '/margherita.webp',
      toppings: [
        {name: 'Tomate', image: '/cherry.png', price: 2},
        {name: 'Milho', image: '/corn.png', price: 2},
        {name: 'Pimenta', image: '/jalapeno.png', price: 2},
        {name: 'Queijo Mussarela', image: '/mozzarella.png', price: 2},
        {name: 'Azeitona', image: '/olives.png', price: 2},
        {name: 'Queijo Parmesão', image: '/parmesan.png', price: 2},
        {name: 'Champion', image: '/mushrooms.png', price: 2},
      ],
    },
    {
      id: 2,
      name: 'Pepperoni',
      description: 'Deliciosa com salame e uma generosa quantidade de queijo',
      priceLg: 89.90,
      priceMd: 79.90,
      priceSm: 69.90,
      image: '/pepperoni.webp',
      toppings: [
        {name: 'Tomate', image: '/cherry.png', price: 2},
        {name: 'Milho', image: '/corn.png', price: 2},
        {name: 'Pimenta', image: '/jalapeno.png', price: 2},
        {name: 'Queijo Mussarela', image: '/mozzarella.png', price: 2},
        {name: 'Azeitona', image: '/olives.png', price: 2},
        {name: 'Queijo Parmesão', image: '/parmesan.png', price: 2},
        {name: 'Champion', image: '/mushrooms.png', price: 2},
      ],
    },
    {
      id: 3,
      name: 'Vegetariana',
      description: 'Molho de tomate, mussarela e legumes frescos',
      priceLg: 89.90,
      priceMd: 79.90,
      priceSm: 69.90,
      image: '/vegetarian.webp',
      toppings: [
        {name: 'Tomate', image: '/cherry.png', price: 2},
        {name: 'Milho', image: '/corn.png', price: 2},
        {name: 'Pimenta', image: '/jalapeno.png', price: 2},
        {name: 'Queijo Mussarela', image: '/mozzarella.png', price: 2},
        {name: 'Azeitona', image: '/olives.png', price: 2},
        {name: 'Queijo Parmesão', image: '/parmesan.png', price: 2},
        {name: 'Champignon', image: '/mushrooms.png', price: 2},
      ],
    },
    {
      id: 4,
      name: 'Caprichosa',
      description: 'Massa crocante com queijo, pimentão, champignon, salame e muito queijo. Sabor irresistível!',
      priceLg: 89.90,
      priceMd: 79.90,
      priceSm: 69.90,
      image: '/capricciosa.webp',
      toppings: [
        {name: 'Tomate', image: '/cherry.png', price: 2},
        {name: 'Milho', image: '/corn.png', price: 2},
        {name: 'Pimenta', image: '/jalapeno.png', price: 2},
        {name: 'Queijo Mussarela', image: '/mozzarella.png', price: 2},
        {name: 'Azeitona', image: '/olives.png', price: 2},
        {name: 'Queijo Parmesão', image: '/parmesan.png', price: 2},
        {name: 'Champion', image: '/mushrooms.png', price: 2},
      ],
    },
  ];
  

  return (
    <section className='cursor-default'>
      <Header />
      <Banner />
      <CartDesktop />
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
          {pizzas.length > 0 ? (
            pizzas.map((pizza: PizzaType) => (
              <Pizza key={String(pizza.id)} pizza={pizza} />
            ))
          ) : (
            <p className="text-center col-span-full text-lg font-semibold mt-16">
             Não há pizzas disponíveis no momento.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
}

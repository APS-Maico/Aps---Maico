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
      name: 'Margherita',
      description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil',
      priceLg: 25,
      priceMd: 20,
      priceSm: 15,
      image: '/margherita.webp',
      toppings: [
        { name: 'Extra Cheese', image: '/public/cheese.jpg', price: 2 },
        { name: 'Basil', image: '/public/basil.jpg', price: 1 },
      ],
    },
    {
      id: 2,
      name: 'Pepperoni',
      description: 'Delicious pepperoni with a generous amount of cheese',
      priceLg: 30,
      priceMd: 25,
      priceSm: 18,
      image: '/pepperoni.webp',
      toppings: [
        { name: 'Pepperoni', image: '/public/pepperoni.jpg', price: 3 },
      ],
    },
    {
      id: 3,
      name: 'Vegetarian',
      description: 'Tomato sauce, mozzarella, and fresh vegetables',
      priceLg: 22,
      priceMd: 18,
      priceSm: 14,
      image: '/vegetarian.webp',
      toppings: [
        { name: 'Bell Peppers', image: '/images/bell-pepper.jpg', price: 1 },
        { name: 'Mushrooms', image: '/images/mushroom.jpg', price: 1.5 },
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
              No pizzas available at the moment.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
}

// pages/index.tsx (ou onde fica a tela principal)
'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import { Pizza } from '@/components/card';
import { Banner } from '@/components/banner';
import { Footer } from '@/components/footer';
import { CartDesktop } from '@/components/cart';
import { PizzaType } from '@/types/types';
import Link from 'next/link';

export default function Home() {
  const [pizzas, setPizzas] = useState<PizzaType[]>([]);

  const addNewPizza = (newPizza: PizzaType) => {
    setPizzas((prevPizzas) => [...prevPizzas, { ...newPizza, quantity: 1 }]);
  };

  return (
    <section className='cursor-default'>
      <Header addNewPizza={addNewPizza} />
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
              Não há pizzas registradas no momento.
            </p>
          )}
        </div>
      </div>

      {/* Botão para acessar a tela de pedidos */}
      <div className="text-center mt-8">
        <Link href="/orders" className="bg-blue-500 text-white px-6 py-3 rounded-md">
          Ver Pedidos Realizados
        </Link>
      </div>

      <div className="text-center mt-8">
        <Link href="/dashboardpage" className="bg-blue-500 text-white px-6 py-3 rounded-md">
          Dashboards
        </Link>
      </div>

      <Footer />
    </section>
  );
}

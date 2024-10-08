'use client';

import React, { useState } from 'react';
import Header from '@/components/header'; // Corrija para importação padrão
import { Pizza } from '@/components/card';
import { Banner } from '@/components/banner';
import { Footer } from '@/components/footer';
import { CartDesktop } from '@/components/cart';
import { PizzaType } from '@/types/types';
import PizzaButton from '@/components/newpizza/pizza-button'; // Importando o botão de adicionar pizza

export default function Home() {
  const [pizzas, setPizzas] = useState<PizzaType[]>([]); // Estado para armazenar as pizzas

  // Função para adicionar uma nova pizza ao estado
  const addNewPizza = (newPizza: PizzaType) => {
    setPizzas((prevPizzas) => [...prevPizzas, newPizza]);
  };

  return (
    <section className='cursor-default'>
      <Header addNewPizza={addNewPizza} /> {/* Passa a função para o Header */}
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

      <Footer />
    </section>
  );
}

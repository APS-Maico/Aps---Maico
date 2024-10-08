// pages/index.tsx
 
'use client';
 
import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Pizza } from '@/components/card';
import { Banner } from '@/components/banner';
import { Footer } from '@/components/footer';
import { CartDesktop } from '@/components/cart';
import { PizzaType } from '@/types/types';
import ModalNewPizza from '@/components/modal/ModalNewPizza'; // Importando o modal
 
export default function Home() {
  const [pizzas, setPizzas] = useState<PizzaType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const addNewPizza = (newPizza: PizzaType) => {
    setPizzas((prevPizzas) => [...prevPizzas, newPizza]);
    setIsModalOpen(false); // Fecha o modal após adicionar a pizza
  };
 
  return (
    <section className='cursor-default'>
      <Header />
      <Banner />
      <CartDesktop />
 
      {/* Botão para abrir o modal de adicionar nova pizza */}
      <div className='container mx-auto mb-4'>
        <button onClick={() => setIsModalOpen(true)} className='btn btn-lg gradient w-full'>
          Add New Pizza
        </button>
      </div>
 
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
     
      {/* Modal para adicionar nova pizza */}
      <ModalNewPizza isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} addNewPizza={addNewPizza} />
 
      <Footer />
    </section>
  );
}
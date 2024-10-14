'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import { Pizza } from '@/components/card';
import { Banner } from '@/components/banner';
import { Footer } from '@/components/footer';
import { CartDesktop } from '@/components/cart';
import { PizzaType } from '@/types/types';
import Dashboard from '@/pages/dashboardpage'; // Importe o componente Dashboard
import Orders from '@/pages/orders'; // Importe o componente de pedidos realizados

export default function Home() {
  document.title = 'DevPizza';
  const [pizzas, setPizzas] = useState<PizzaType[]>([]);
  const [showDashboard, setShowDashboard] = useState(false); // Estado para controle do Dashboard
  const [showOrders, setShowOrders] = useState(false); // Estado para controle dos pedidos realizados

  const addNewPizza = (newPizza: PizzaType) => {
    setPizzas((prevPizzas) => [...prevPizzas, { ...newPizza, quantity: 1 }]);
  };

  const handleDashboardToggle = () => {
    setShowDashboard((prev) => !prev); // Alterna o estado do Dashboard
    setShowOrders(false); // Esconde os pedidos realizados ao abrir o Dashboard
  };

  const handleOrdersToggle = () => {
    setShowOrders((prev) => !prev); // Alterna o estado dos pedidos realizados
    setShowDashboard(false); // Esconde o Dashboard ao abrir os pedidos
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

      {/* Botões para acessar a tela de pedidos e o dashboard */}
      <div className="flex justify-start mt-8 mb-8 space-x-4"> {/* Flexbox para alinhar os botões lado a lado */}
        <button 
          onClick={handleOrdersToggle} 
          className='btn btn-sm gradient' type='button' // Botão menor
        >
          {showOrders ? 'Fechar Pedidos' : 'Ver Pedidos'}
        </button>

        <button 
          onClick={handleDashboardToggle} 
          className='btn btn-sm gradient' type='button' // Botão menor
        >
          {showDashboard ? 'Fechar Dashboard' : 'Abrir Dashboard'}
        </button>
      </div>

      {/* Renderiza os pedidos realizados condicionalmente */}
      {showOrders && (
        <div className="mt-8">
          <Orders /> {/* Certifique-se de que o componente Orders está importado */}
        </div>
      )}

      {/* Renderiza o Dashboard condicionalmente */}
      {showDashboard && (
        <div className="mt-8">
          <Dashboard /> {/* Certifique-se de que o componente Dashboard está importado */}
        </div>
      )}

      <Footer />
    </section>
  );
}

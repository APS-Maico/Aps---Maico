'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/header';
import { Pizza } from '@/components/card';
import { Banner } from '@/components/banner';
import { Footer } from '@/components/footer';
import { CartDesktop } from '@/components/cart';
import { PizzaType } from '@/types/types';
import Dashboard from '@/pages/dashboardpage'; // Importe o componente Dashboard
import Orders from '@/pages/orders'; // Importe o componente de pedidos realizados
import ClientOrder from '@/components/Order/ClientOrder';

export default function Home() {
  // UseEffect para alterar o título da página no cliente
  useEffect(() => {
    document.title = 'DevPizza'; // Isso só será executado no cliente
  }, []);

  // Estado das pizzas
  const [pizzas, setPizzas] = useState<PizzaType[]>([]);

  // Estados de controle do Dashboard, Pedidos e Banner
  const [showDashboard, setShowDashboard] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showClientOrders, setShowClientOrders] = useState(false);

  // Função para buscar as pizzas do localStorage quando o componente montar
  useEffect(() => {
    const storedPizzas = JSON.parse(localStorage.getItem('pizzas') || '[]');
    setPizzas(storedPizzas); // Atualiza o estado com as pizzas armazenadas
  }, []);

  // Função para salvar pizzas no localStorage sempre que o estado mudar
  useEffect(() => {
    if (pizzas.length > 0) {
      localStorage.setItem('pizzas', JSON.stringify(pizzas));
    }
  }, [pizzas]);

  // Função para adicionar nova pizza e atualizar o estado
  const addNewPizza = (newPizza: PizzaType) => {
    setPizzas((prevPizzas) => [...prevPizzas, { ...newPizza, quantity: 1 }]);
  };

  // Função para alternar o estado do Dashboard
  const handleDashboardToggle = () => {
    setShowDashboard((prev) => !prev);
    setShowOrders(false);
    setShowClientOrders(false);
    setShowBanner(!showDashboard);
  };

  // Função para alternar o estado dos pedidos
  const handleOrdersToggle = () => {
    setShowOrders((prev) => !prev);
    setShowDashboard(false);
    setShowBanner(true);
    setShowClientOrders(false);
  };

  const handleClientOrderClick = () => {
    setShowClientOrders((prev) => !prev);
    setShowOrders(false); // Esconde a página de pedidos do funcionário
    setShowDashboard(false); // Esconde o dashboard
    setShowBanner(true); 
  
  };

  return (
    <section className='cursor-default'>
      <Header 
        addNewPizza={addNewPizza} 
        showDashboard={showDashboard}
        onDashboardToggle={handleDashboardToggle}
        showOrders={showOrders}
        onOrdersToggle={handleOrdersToggle}
        onClientOrderClick={handleClientOrderClick} // Passa a função para o Header
      />
      
      {/* Renderiza o Banner condicionalmente */}
      {showBanner && !showDashboard && !showOrders && !showClientOrders && <Banner />}

      <CartDesktop />

      {/* Renderiza a seção de pizzas condicionalmente */}
      {!showDashboard && !showOrders &&  !showClientOrders && (
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
      )}

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
            {/* Renderiza os pedidos do cliente condicionalmente */}
       {showClientOrders && (
        <div className="mt-8">
          <ClientOrder /> {/* Exibe a página de Meus Pedidos */}
        </div>
      )}
      <Footer />
    </section>
  );
}

// pages/Home.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/header';
import { Pizza } from '@/components/card';
import { Banner } from '@/components/banner';
import { Footer } from '@/components/footer';
import { CartDesktop } from '@/components/cart';
import { PizzaType } from '@/types/types';
import Dashboard from '@/pages/dashboardpage';
import Orders from '@/pages/orders';
import ClientOrder from '@/components/Order/ClientOrder';
import MotoboyScreen from '@/components/Motoboy/MotoboyScreen'; // Importe o componente MotoboyScreen
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    document.title = 'DevPizza';
  }, []);

  const [pizzas, setPizzas] = useState<PizzaType[]>([]);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showClientOrders, setShowClientOrders] = useState(false);
  const [isMotoboyMode, setIsMotoboyMode] = useState(false);

  useEffect(() => {
    const storedPizzas = JSON.parse(localStorage.getItem('pizzas') || '[]');
    setPizzas(storedPizzas);
  }, []);

  useEffect(() => {
    if (pizzas.length > 0) {
      localStorage.setItem('pizzas', JSON.stringify(pizzas));
    }
  }, [pizzas]);

  const addNewPizza = (newPizza: PizzaType) => {
    setPizzas((prevPizzas) => [...prevPizzas, { ...newPizza, quantity: 1 }]);
  };

  const handleDashboardToggle = () => {
    setShowDashboard((prev) => !prev);
    setShowOrders(false);
    setShowClientOrders(false);
    setShowBanner(!showDashboard);
    setIsMotoboyMode(false);
  };

  const handleOrdersToggle = () => {
    setShowOrders((prev) => !prev);
    setShowDashboard(false);
    setShowBanner(true);
    setShowClientOrders(false);
    setIsMotoboyMode(false);
  };

  const handleClientOrderClick = () => {
    setShowClientOrders((prev) => !prev);
    setShowOrders(false);
    setShowDashboard(false);
    setShowBanner(true);
    setIsMotoboyMode(false);
  };

  const handleMotoboyToggle = () => {
    setIsMotoboyMode((prev) => !prev);
    setShowDashboard(false);
    setShowOrders(false);
    setShowClientOrders(false);
    setShowBanner(!isMotoboyMode);
  };

  const handleCheckoutClick = () => {
    router.push('/checkout');
  };

  return (
    <section className='cursor-default'>
      <Header 
        addNewPizza={addNewPizza} 
        showDashboard={showDashboard}
        onDashboardToggle={handleDashboardToggle}
        showOrders={showOrders}
        onOrdersToggle={handleOrdersToggle}
        onClientOrderClick={handleClientOrderClick}
        onMotoboyToggle={handleMotoboyToggle} // Adicione esta linha
      />
      
      {showBanner && !showDashboard && !showOrders && !showClientOrders && !isMotoboyMode && <Banner />}

      <CartDesktop />

      <div className="text-center mt-8">
        
      </div>

      {!showDashboard && !showOrders && !showClientOrders && !isMotoboyMode && (
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

      {showOrders && (
        <div className="mt-8">
          <Orders />
        </div>
      )}

      {showDashboard && (
        <div className="mt-8">
          <Dashboard />
        </div>
      )}

      {showClientOrders && (
        <div className="mt-8">
          <ClientOrder />
        </div>
      )}
      
      {isMotoboyMode && (
        <div className="mt-8">
          <MotoboyScreen /> {/* Renderiza a tela do motoboy aqui */}
        </div>
      )}

      <Footer />
    </section>
  );
}

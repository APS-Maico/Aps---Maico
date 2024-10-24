import React from 'react';
import PizzaButton from '@/components/newpizza/pizza-button'; // Certifique-se de que o caminho está correto
import { CartIcon, BrandLogo, Contact } from './structure';
import { PizzaType } from '@/types/types';
import DashboardButton from '@/components/dashboard-button/dashboard-button'; // Importe o componente do botão do dashboard
import OrdersToggleButton from '@/components/pedidos-button/pedidos-button'; // Importe o componente do botão de pedidos
import MyOrdersButton from '@/components/pedidos-button/CllientOrder-button'; // Botão de Meus Pedidos para o cliente

interface HeaderProps {
  addNewPizza: (newPizza: PizzaType) => void;
  showDashboard: boolean; // Adicione esta prop para controlar o estado do dashboard
  onDashboardToggle: () => void; // Adicione esta prop para a função que alterna o dashboard
  showOrders: boolean; // Adicione esta prop para controlar o estado dos pedidos
  onOrdersToggle: () => void; // Adicione esta prop para a função que alterna os pedidos
  onClientOrderClick: () => void; // Função que será chamada ao clicar em "Meus Pedidos"
}

export const Header: React.FC<HeaderProps> = ({
  addNewPizza,
  showDashboard,
  onDashboardToggle,
  showOrders,
  onOrdersToggle,
  onClientOrderClick
}) => {
  return (
    <nav className="relative w-full bg-primary py-8 bg-pattern bg-pattern-with-shadow">
      <div className='container mx-auto flex flex-col items-center justify-between gap-y-3 lg:flex-row'>
        <BrandLogo />
        <div className='flex items-center gap-x-8'>
          <CartIcon />
          <PizzaButton addNewPizza={addNewPizza} />

          {/* Adiciona o botão do dashboard */}
          <DashboardButton 
            isOpen={showDashboard} 
            onToggle={onDashboardToggle} 
          />

          {/* Adiciona o botão de ver pedidos */}
          <OrdersToggleButton 
            isOpen={showOrders} 
            onToggle={onOrdersToggle} 
          />

          {/* Adiciona o botão de Meus Pedidos para o cliente */}
          <MyOrdersButton onClick={onClientOrderClick} />
        </div>
      </div>
    </nav>
  );
};

export default Header;

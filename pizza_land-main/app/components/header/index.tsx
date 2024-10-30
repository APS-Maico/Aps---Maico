import React, { useState } from 'react';
import PizzaButton from '@/components/newpizza/pizza-button';
import { CartIcon, BrandLogo, Contact } from './structure';
import { PizzaType } from '@/types/types';
import DashboardButton from '@/components/dashboard-button/dashboard-button';
import OrdersToggleButton from '@/components/pedidos-button/pedidos-button';
import MyOrdersButton from '@/components/pedidos-button/CllientOrder-button';
import MotoboyButton from '@/components/Motoboy/Motoboy-button';

interface HeaderProps {
  addNewPizza: (newPizza: PizzaType) => void;
  showDashboard: boolean;
  onDashboardToggle: () => void;
  showOrders: boolean;
  onOrdersToggle: () => void;
  onClientOrderClick: () => void;
  onMotoboyToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  addNewPizza,
  showDashboard,
  onDashboardToggle,
  showOrders,
  onOrdersToggle,
  onClientOrderClick,
  onMotoboyToggle
}) => {
  const [profile, setProfile] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleProfileChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProfile(event.target.value);
    setIsPopupOpen(false); // Fecha o popup ao selecionar o perfil
  };

  return (
    <>
      {/* Popup para selecionar o perfil */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Escolha seu perfil</h2>
            <select 
              onChange={handleProfileChange} 
              className="p-2 border rounded"
              defaultValue=""
            >
              <option value="" disabled>Selecione o perfil</option>
              <option value="admin">Administrador</option>
              <option value="motoboy">Motoboy</option>
              <option value="client">Cliente</option>
            </select>
          </div>
        </div>
      )}

      {/* Header principal */}
      <nav className="relative w-full bg-primary py-8 bg-pattern bg-pattern-with-shadow">
        <div className="container mx-auto flex flex-col items-center justify-between gap-y-3 lg:flex-row">
          <BrandLogo />
          <div className="flex items-center gap-x-8">
            <CartIcon />

            {/* Exibe o PizzaButton para administrador e cliente */}
            {(profile === 'admin') && (
              <PizzaButton addNewPizza={addNewPizza} />
            )}

            {/* Exibe o DashboardButton apenas para administrador */}
            {profile === 'admin' && (
              <DashboardButton 
                isOpen={showDashboard} 
                onToggle={onDashboardToggle} 
              />
            )}

            {/* Exibe o OrdersToggleButton apenas para administrador */}
            {profile === 'admin' && (
              <OrdersToggleButton 
                isOpen={showOrders} 
                onToggle={onOrdersToggle} 
              />
            )}

            {/* Exibe o MyOrdersButton apenas para cliente */}
            {profile === 'client' && (
              <MyOrdersButton onClick={onClientOrderClick} />
            )}

            {/* Exibe o MotoboyButton apenas para motoboy */}
            {profile === 'motoboy' && (
              <MotoboyButton onClick={onMotoboyToggle} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

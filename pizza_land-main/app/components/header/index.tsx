import React, { useState } from 'react';
import PizzaButton from '@/components/newpizza/pizza-button';
import { CartIcon, BrandLogo, Contact } from './structure';
import { PizzaType } from '@/types/types';
import DashboardButton from '@/components/dashboard-button/dashboard-button';
import OrdersToggleButton from '@/components/pedidos-button/pedidos-button';
import MyOrdersButton from '@/components/pedidos-button/CllientOrder-button';
import MotoboyButton from '@/components/Motoboy/Motoboy-button';
import { FaUserCircle } from 'react-icons/fa';

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
  const [profile, setProfile] = useState<string>('client');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileChange = (newProfile: string) => {
    setProfile(newProfile);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <nav className="relative w-full bg-primary py-8 bg-pattern bg-pattern-with-shadow">
        <div className="container mx-auto flex flex-col items-center justify-between gap-y-3 lg:flex-row">
          <BrandLogo />
          
          <div className="flex items-center gap-x-8">
            <CartIcon />

            {profile === 'admin' && (
              <PizzaButton addNewPizza={addNewPizza} />
            )}
            {profile === 'admin' && (
              <DashboardButton 
                isOpen={showDashboard} 
                onToggle={onDashboardToggle} 
              />
            )}
            {profile === 'admin' && (
              <OrdersToggleButton 
                isOpen={showOrders} 
                onToggle={onOrdersToggle} 
              />
            )}
            {profile === 'client' && (
              <MyOrdersButton onClick={onClientOrderClick} />
            )}
            {profile === 'motoboy' && (
              <MotoboyButton onClick={onMotoboyToggle} />
            )}

            {/* Ícone de perfil com novas dimensões */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-[#ffa323] w-10 h-10 flex items-center justify-center rounded-full focus:outline-none"
              >
                <FaUserCircle className="w-full h-full" />
              </button>
              
              {/* Dropdown para seleção de perfil */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg">
                  <button
                    onClick={() => handleProfileChange('admin')}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    Administrador
                  </button>
                  <button
                    onClick={() => handleProfileChange('motoboy')}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    Motoboy
                  </button>
                  <button
                    onClick={() => handleProfileChange('client')}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    Cliente
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

// components/header.tsx
import React from 'react';
import PizzaButton from '@/components/newpizza/pizza-button'; // Certifique-se de que o caminho está correto
import { CartIcon, BrandLogo, Contact } from './structure';
import { PizzaType } from '@/types/types';

interface HeaderProps {
  addNewPizza: (newPizza: PizzaType) => void;
}

export const Header: React.FC<HeaderProps> = ({ addNewPizza }) => {
  return (
    <nav className='absolute w-full bg-pink-50/30 py-8'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-y-3 lg:flex-row'>
        <BrandLogo />
        <div className='flex items-center gap-x-8'>
          <PizzaButton addNewPizza={addNewPizza} />
          <Contact />
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Header;

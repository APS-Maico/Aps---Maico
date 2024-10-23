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
    <nav className="relative w-full bg-primary py-8 bg-pattern bg-pattern-with-shadow">
      <div className='container mx-auto flex flex-col items-center justify-between gap-y-3 lg:flex-row'>
        <BrandLogo />
        <div className='flex items-center gap-x-8'>
          <Contact />
          <CartIcon />
          <PizzaButton addNewPizza={addNewPizza} />
        </div>
      </div>
    </nav>
  );
};

export default Header;

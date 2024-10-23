// pages/new-pizza.tsx

'use client';

import React from 'react';
import { PizzaForm } from '@/components/newpizza/pizza-form';
import { PizzaType } from '@/types/types';
import toast from 'react-hot-toast';

const NewPizzaPage = () => {
  const addNewPizza = (newPizza: PizzaType) => {
    // Obter pizzas existentes do localStorage
    const existingPizzas = JSON.parse(localStorage.getItem('pizzas') || '[]');

    // Adicionar a nova pizza à lista
    existingPizzas.push(newPizza);

    // Salvar a lista atualizada de pizzas no localStorage
    localStorage.setItem('pizzas', JSON.stringify(existingPizzas));

    console.log(newPizza); // Para fins de teste
    toast.success('Pizza added successfully!');
  };

  return (
    <div className='container mx-auto p-4'>
      <PizzaForm addNewPizza={addNewPizza} />
    </div>
  );
};

export default NewPizzaPage;

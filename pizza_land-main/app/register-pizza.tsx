// pages/new-pizza.tsx
 
'use client';
 
import React from 'react';
import { PizzaForm } from '@/components/newpizza/pizza-form';
import { PizzaType } from '@/types/types';
import toast from 'react-hot-toast';
 
const NewPizzaPage = () => {
  const addNewPizza = (newPizza: PizzaType) => {
    // Aqui você pode implementar a lógica para salvar a nova pizza,
    // como enviar para uma API ou armazenar em um estado global
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
 
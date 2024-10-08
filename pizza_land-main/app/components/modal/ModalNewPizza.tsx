import React from 'react';
import { PizzaForm } from '@/components/newpizza/pizza-form';
import { PizzaType } from '@/types/types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  addNewPizza: (newPizza: PizzaType) => void;
}

const ModalNewPizza: React.FC<ModalProps> = ({ isOpen, onClose, addNewPizza }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg overflow-y-auto max-h-[90vh]">
        <PizzaForm addNewPizza={addNewPizza} />
        <button onClick={onClose} className="mt-4 bg-red-500 text-white p-2 rounded">Fechar</button>
      </div>
    </div>
  );
};

export default ModalNewPizza;

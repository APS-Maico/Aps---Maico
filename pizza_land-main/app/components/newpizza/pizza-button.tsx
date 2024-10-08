import React, { useState } from 'react';
import ModalNewPizza from '@/components/modal/ModalNewPizza'; // Certifique-se de que o caminho está correto
import { PizzaType } from '@/types/types';

interface PizzaButtonProps {
  addNewPizza: (newPizza: PizzaType) => void; // Recebe a função addNewPizza como prop
}

const PizzaButton: React.FC<PizzaButtonProps> = ({ addNewPizza }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/fechar o modal

  return (
    <div>
      {/* Botão para abrir o modal de adicionar nova pizza */}
      <div className="container mx-auto mb-4">
        <button onClick={() => setIsModalOpen(true)} className="btn btn-lg gradient w-full">
          Adicionar nova Pizza
        </button>
      </div>

      {/* Modal para adicionar nova pizza */}
      <ModalNewPizza
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Passa a função de fechar o modal
        addNewPizza={addNewPizza} // Adiciona a pizza e fecha o modal
      />
    </div>
  );
};

export default PizzaButton;

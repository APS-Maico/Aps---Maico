import React, { useState } from 'react';
import ModalNewPizza from '@/components/modal/ModalNewPizza'; // Certifique-se de que o caminho está correto
import { PizzaType } from '@/types/types';
 
export default function PizzaButton({ addNewPizza }: { addNewPizza: (newPizza: PizzaType) => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  return (
<div>
      {/* Imagem para abrir o modal de adicionar nova pizza */}
<div className="container mx-auto mb-4">
<img 
          src="/pizzaicon.png" // Caminho para a imagem pizza-icone
          alt="Adicionar nova Pizza"
          className="cursor-pointer w-12 h-12 mt-5 " // Ajuste o tamanho conforme necessário
          onClick={() => setIsModalOpen(true)} // Abre o modal ao clicar na imagem
        />
</div>
 
      {/* Modal para adicionar nova pizza */}
<ModalNewPizza isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} addNewPizza={addNewPizza} />
</div>
  );
}
// components/motoboy-button/motoboy-button.tsx
import React from 'react';

interface MotoboyButtonProps {
  onClick: () => void; // Função para alternar o modo motoboy
}

const MotoboyButton: React.FC<MotoboyButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
    >
      Modo Motoboy
    </button>
  );
};

export default MotoboyButton;

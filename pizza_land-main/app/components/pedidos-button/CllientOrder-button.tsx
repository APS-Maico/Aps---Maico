import React from 'react';

interface MyOrdersButtonProps {
  onClick: () => void; // Função que será chamada quando o botão for clicado
}

export default function MyOrdersButton({ onClick }: MyOrdersButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90"
    >
      Meus Pedidos
    </button>
  );
}

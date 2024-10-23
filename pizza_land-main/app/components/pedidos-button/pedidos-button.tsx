import React from 'react';

interface DashboardToggleButtonProps {
  isOpen: boolean; // Estado para saber se o Dashboard está aberto
  onToggle: () => void; // Função para alternar a visibilidade do Dashboard
}

const DashboardToggleButton: React.FC<DashboardToggleButtonProps> = ({ isOpen, onToggle }) => {
  return (
    <img 
      src="shopping-list.png" // Caminho para a imagem do ícone do Dashboard
      alt="Alternar Dashboard"
      className="cursor-pointer w-10 h-10 mb-1" // Ajuste o tamanho conforme necessário
      onClick={onToggle} // Alterna o Dashboard ao clicar na imagem
    />
  );
};

export default DashboardToggleButton;

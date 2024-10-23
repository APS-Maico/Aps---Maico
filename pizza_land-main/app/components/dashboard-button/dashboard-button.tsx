// components/DashboardToggleButton.tsx

import React from 'react';

interface DashboardToggleButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const DashboardToggleButton: React.FC<DashboardToggleButtonProps> = ({ isOpen, onToggle }) => {
  return (
    <img 
      src="line-chart (1).png"
      alt="Ver DashBoards"
      className="cursor-pointer w-11 h-11 mb-0" // Ajuste o tamanho conforme necessário
      onClick={onToggle} // Alterna o dashboard ao clicar na imagem
    />
  );
};

export default DashboardToggleButton;

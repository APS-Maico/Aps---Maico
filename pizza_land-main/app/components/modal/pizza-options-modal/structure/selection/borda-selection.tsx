import React from 'react';

interface BordaSelectionProps {
  borda: string;
  setBorda: (borda: string) => void;
}

export const BordaSelection: React.FC<BordaSelectionProps> = ({
  borda,
  setBorda,
}) => {
  return (
    <div className='flex items-center justify-center lg:justify-start'>
      <div className='mb-8 flex gap-x-12 font-medium'>
        <label className='flex cursor-pointer items-center gap-x-2'>
          <input
            className='h-4 w-4 appearance-none rounded-full border border-gray-400 checked:bg-gradient-to-r checked:from-primary checked:to-secondary'
            type='radio'
            name='borda'
            value='tradicional'
            checked={borda === 'tradicional'}
            onChange={(e) => setBorda(e.target.value)}
          />
          Tradicional
        </label>
        <div>
          <label className='flex cursor-pointer items-center gap-x-2'>
            <input
              className='h-4 w-4 appearance-none rounded-full border border-gray-400 checked:bg-gradient-to-r checked:from-primary checked:to-secondary'
              type='radio'
              name='borda'
              value='fina'
              checked={borda === 'fina'}
              onChange={(e) => setBorda(e.target.value)}
            />
            Afinar
          </label>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import Image from 'next/image';

interface PaymentAcceptedProps {
  count: number;
  customerIdentity: string | null;
}

export const PaymentAccepted: React.FC<PaymentAcceptedProps> = ({
  count,
  customerIdentity,
}) => {
  return (
    <div className='z-50 flex h-[100vh] flex-col items-center justify-center px-6 lg:h-[600px]'>
      <h2 className='text-center text-2xl font-semibold'>
        Obrigado {customerIdentity} ! O pedido foi concluído !
      </h2>
      <Image
        src={'/success-1.gif'}
        width={150}
        height={150}
        alt='success message'
      />
      <div>
        Esta janela será fechada em <span>{count}</span> segundos
      </div>
    </div>
  );
};

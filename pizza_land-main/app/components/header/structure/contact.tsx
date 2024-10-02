import React from 'react';
import Image from 'next/image';

export const Contact = () => {
  return (
    <div className='flex items-center gap-x-3'>
      <Image src={'phone.svg'} width={42} height={42} alt='phone-icon' />
      <div className='text-white'>
        <div className='font-robotoCondensed text-sm font-medium uppercase leading-none'>
          Serviço de entrega de pizza
        </div>
        <div className='font-robotoCondensed text-3xl font-extrabold leading-none tracking-wide'>
          (47)3332-8965
        </div>
      </div>
    </div>
  );
};

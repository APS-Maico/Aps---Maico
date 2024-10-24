import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.svg';
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from 'react-icons/fa';

export const Footer = () => {
  return (
<footer className='static bottom-0 left-0 right-0 bg-primary bg-pattern py-16 z-50'>
  <div className='container mx-auto'>
    <div className='flex flex-col items-center justify-center gap-y-6'>
      <Link href={'#'}>
        <Image src={Logo} width={180} height={180} alt='logo' />
      </Link>
      <div className='flex gap-x-6 text-xl text-white'>
        <Link href={'#'} aria-label='Youtube-logo'>
          <FaYoutube />
        </Link>
        <Link href={'#'} aria-label='Facebook-logo'>
          <FaFacebook />
        </Link>
        <Link href={'#'} aria-label='Instagram-logo'>
          <FaInstagram />
        </Link>
        <Link href={'#'} aria-label='Pinterest-logo'>
          <FaPinterest />
        </Link>
      </div>
      <div className='font-medium text-white'>
        Copyright &copy; DevPizza 2024. Todos os seus direitos reservados.
      </div>
    </div>
  </div>
</footer>

  );
};

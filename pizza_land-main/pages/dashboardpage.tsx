// pages/dashboard.tsx

'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar escalas e elementos necessários
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DashboardPage() {
  const [pizzas, setPizzas] = useState<number>(100);
  const [bairroMaisVendas, setBairroMaisVendas] = useState<string>('Centro');
  const [pizzaMaisVendida, setPizzaMaisVendida] = useState<string>('Pepperoni');

  const pizzaData = {
    labels: ['Margarita', 'Pepperoni', 'Quatro Queijos', 'Calabresa'],
    datasets: [
      {
        label: 'Número de Vendas no Dia',
        data: [12, 19, 3, 5],
        backgroundColor: '#D1411E',
        borderColor: '#7A9541',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Vendas de Pizzas',
      },
    },
  };

  return (
    <section className='cursor-default'>
      <Header addNewPizza={() => {}} /> {/* Defina uma função vazia ou use um estado adequado */}
      <div className='container mx-auto my-4'>
        <h1 className="text-center text-3xl font-bold mb-8">Dashboard de Vendas</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
          <div className='p-4 bg-white rounded-lg shadow-md'>
            <h2 className="text-xl font-semibold">Total de Pizzas Vendidas</h2>
            <p className="text-2xl font-bold">{pizzas}</p>
          </div>
          <div className='p-4 bg-white rounded-lg shadow-md'>
            <h2 className="text-xl font-semibold">Bairro com Mais Vendas</h2>
            <p className="text-2xl font-bold">{bairroMaisVendas}</p>
          </div>
          <div className='p-4 bg-white rounded-lg shadow-md'>
            <h2 className="text-xl font-semibold">Pizza Mais Vendida</h2>
            <p className="text-2xl font-bold">{pizzaMaisVendida}</p>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <h2 className="text-xl font-semibold mb-4">Vendas do Dia</h2>
            <Bar data={pizzaData} options={barOptions} />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

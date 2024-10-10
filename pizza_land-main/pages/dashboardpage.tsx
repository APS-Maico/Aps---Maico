// pages/dashboard.tsx
'use client';

import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function DashboardPage() {
  const [pizzas, setPizzas] = useState<number>(100); // Total de pizzas vendidas
  const [bairroMaisVendas, setBairroMaisVendas] = useState<string>('Centro'); // Bairro com mais vendas
  const [pizzaMaisVendida, setPizzaMaisVendida] = useState<string>('Pepperoni'); // Pizza mais vendida

  // Dados para o gráfico de vendas por tipo de pizza
  const pizzaData = {
    labels: ['Margarita', 'Pepperoni', 'Quatro Queijos', 'Calabresa'],
    datasets: [
      {
        label: 'Número de Vendas',
        data: [12, 19, 3, 5],
        backgroundColor: '#D1411E',
        borderColor: '#7A9541',
        borderWidth: 1,
      },
    ],
  };

  // Dados para o gráfico de vendas por bairros
  const bairroData = {
    labels: ['Centro', 'Bairro A', 'Bairro B', 'Bairro C'],
    datasets: [
      {
        label: 'Vendas por Bairro',
        data: [15, 22, 5, 10],
        backgroundColor: '#FFA323',
        borderColor: '#FFA323',
        borderWidth: 1,
      },
    ],
  };

  // Dados para o gráfico de pizza
  const pieData = {
    labels: ['Centro', 'Bairro A', 'Bairro B', 'Bairro C'],
    datasets: [
      {
        data: [15, 22, 5, 10],
        backgroundColor: ['#7A9541', '#D1411E', '#FFA323', '#F0D799'],
        borderColor: ['#7A9541', '#D1411E', '#FFA323', '#F0D799'],
        borderWidth: 1,
      },
    ],
  };

  // Configurações para os gráficos de barras (Vendas por Pizza e Vendas por Bairro)
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const, // Garantimos que o valor seja aceito
      },
      title: {
        display: true,
        text: 'Vendas de Pizzas',
      },
    },
  };

  // Configurações para o gráfico de pizza (Distribuição por Bairro)
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right' as const, // Garantimos que o valor seja aceito
      },
      title: {
        display: true,
        text: 'Distribuição de Vendas por Bairros',
      },
    },
  };

  return (
    <section className='cursor-default'>
      <div className='container mx-auto my-4'>
        <h1 className="text-center text-3xl font-bold mb-8">Dashboard de Vendas</h1>

        {/* Resumo */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
          <div className='p-4 bg-white rounded-lg shadow-md'>
            <h2 className="text-xl font-semibold">Total de Pizzas Vendidas</h2>
            <p className="text-2xl font-bold">{pizzas}</p>
            {/* Adicionando botão para detalhes */}
            <button className='btn btn-lg gradient w-full mt-4' type='button'>
              Ver Detalhes
            </button>
          </div>

          <div className='p-4 bg-white rounded-lg shadow-md'>
            <h2 className="text-xl font-semibold">Bairro com Mais Vendas</h2>
            <p className="text-2xl font-bold">{bairroMaisVendas}</p>
            {/* Adicionando botão para detalhes */}
            <button className='btn btn-lg gradient w-full mt-4' type='button'>
              Ver Detalhes
            </button>
          </div>

          <div className='p-4 bg-white rounded-lg shadow-md'>
            <h2 className="text-xl font-semibold">Pizza Mais Vendida</h2>
            <p className="text-2xl font-bold">{pizzaMaisVendida}</p>
            {/* Adicionando botão para detalhes */}
            <button className='btn btn-lg gradient w-full mt-4' type='button'>
              Ver Detalhes
            </button>
          </div>
        </div>

        {/* Gráficos */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Gráfico de Barras: Vendas por Tipo de Pizza */}
          <div className='lg:col-span-2'>
            <h2 className="text-xl font-semibold mb-4">Vendas por Tipo de Pizza</h2>
            <Bar data={pizzaData} options={barOptions} />
          </div>

          {/* Gráfico de Pizza: Distribuição de Vendas */}
          <div className='lg:col-span-1'>
            <h2 className="text-xl font-semibold mb-4">Distribuição por Bairro</h2>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>

        {/* Gráfico de Barras: Vendas por Bairro */}
        <div className='mt-8'>
          <h2 className="text-xl font-semibold mb-4">Vendas por Bairro</h2>
          <Bar data={bairroData} options={barOptions} />
        </div>
      </div>
    </section>
  );
}

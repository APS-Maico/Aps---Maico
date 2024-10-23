'use client';

import React, { useState } from 'react';
import OrderList from '@/components/Order/OrderList'; // Componente que exibe os pedidos
import { PizzaType } from '@/types/types';

export default function Orders() {
  const [pizzas, setPizzas] = useState<PizzaType[]>([]);

  const addNewPizza = (newPizza: PizzaType) => {
    setPizzas((prevPizzas) => [...prevPizzas, { ...newPizza, quantity: 1 }]);
  };

  // Função para simular a adição de pedidos (pode ser adaptada para buscar do backend)
  const addFakeOrder = () => {
    const newOrder: PizzaType = {
      id: 1, // exemplo de ID
      name: "Pizza Margherita",
      description: "Uma deliciosa pizza com molho de tomate, queijo e manjericão.",
      priceLg: 30, // preço para o tamanho grande
      priceMd: 25, // preço para o tamanho médio
      priceSm: 20, // preço para o tamanho pequeno
      image: "https://exemplo.com/pizza-margherita.jpg", // URL da imagem
      quantity: 1 // quantidade
    };

    setPizzas((prevOrders) => [...prevOrders, newOrder]);
  };

  return (
    <section className="cursor-default">
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">Tela do Funcionário</h1>
        <OrderList /> {/* Removi a prop orders */}
        <button
          onClick={addFakeOrder}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Adicionar Pedido Fictício
        </button>
      </div>
    </section>
  );
}

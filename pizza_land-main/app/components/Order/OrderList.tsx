import React, { useEffect, useState } from 'react';
import { PizzaType } from '@/types/types';

interface Order {
  customer: string; // Nome do cliente
  pizzas: PizzaType[]; // Lista de pizzas
}

export default function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]); // Estado para armazenar múltiplos pedidos

  // Função para carregar os pedidos do localStorage
  useEffect(() => {
    const savedOrders = localStorage.getItem('orders'); // Recupera os pedidos salvos no localStorage
    if (savedOrders) {
      const parsedOrders: Order[] = JSON.parse(savedOrders); // Converte os pedidos para objetos
      setOrders(parsedOrders); // Atualiza o estado com os pedidos recuperados
    }
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Pedidos a Preparar</h2>
      {orders.length > 0 ? ( // Verifica se existem pedidos
        <ul className="space-y-4">
          {orders.map((order, index) => (
            <li key={index} className="border border-gray-300 rounded-md p-4">
              <span className="font-medium text-lg">Cliente: {order.customer}</span>
              <ul className="space-y-2 mt-2">
                {order.pizzas.map((pizza: PizzaType, pizzaIndex: number) => (
                  <li key={pizzaIndex} className="flex justify-between items-center">
                    <span className="font-medium">Sabor: {pizza.name}</span> {/* Nome da pizza */}
                    <span className="text-sm text-gray-500">Quantidade: {pizza.quantity}</span> {/* Quantidade */}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-center">Nenhum pedido a ser preparado no momento.</p>
      )}
    </div>
  );
}

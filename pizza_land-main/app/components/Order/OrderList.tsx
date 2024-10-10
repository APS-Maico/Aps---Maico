// components/OrderList.tsx
import React from 'react';
import { PizzaType } from '@/types/types';

interface OrderListProps {
  orders: PizzaType[]; // Recebe os pedidos como uma lista
}

export default function OrderList({ orders }: OrderListProps) {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Pedidos a Preparar</h2>
      {orders.length > 0 ? (
        <ul className="space-y-4">
          {orders.map((order: PizzaType, index: number) => (
            <li
              key={index}
              className="border border-gray-300 rounded-md p-4 flex justify-between items-center"
            >
              <span className="font-medium">{order.name}</span> {/* Nome da pizza */}
              <span className="text-sm text-gray-500">Quantidade: {order.quantity}</span> {/* Quantidade */}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-center">Nenhum pedido a ser preparado no momento.</p>
      )}
    </div>
  );
}

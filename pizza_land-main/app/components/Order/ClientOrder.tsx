import React, { useState, useEffect } from 'react';
import Stepper from '@/components/stepper/stepper';
import { PizzaType } from '@/types/types';

interface Order {
  id: number;
  customer: string;
  pizzas: PizzaType[];
  status: string;
}

export default function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      const parsedOrders: Order[] = JSON.parse(savedOrders);
      setOrders(parsedOrders);
    }
  }, []);
  
  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
    console.log("Pedido selecionado:", order); // Debug: verificar qual pedido foi selecionado
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Meus Pedidos</h1>
      
      {selectedOrder ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Detalhes do Pedido #{selectedOrder.id}</h2>
          <p>Cliente: {selectedOrder.customer}</p>
          <p>Pizza(s): {selectedOrder.pizzas.map(pizza => `${pizza.name} (${pizza.quantity})`).join(', ')}</p>

          <Stepper orderId={0} isClientView={true} /> {/* Passa isClientView como true */}

          <button
            className="mt-4 text-blue-500 underline"
            onClick={() => setSelectedOrder(null)}
          >
            Voltar à lista de pedidos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border p-4 rounded-lg cursor-pointer"
              onClick={() => handleOrderClick(order)}
            >
              <h2 className="font-semibold">Pedido #{order.id}</h2>
              <p>Cliente: {order.customer}</p>
              <p>{order.pizzas.length} pizza(s) no pedido</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

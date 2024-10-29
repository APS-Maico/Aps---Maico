'use client';

import React, { useEffect, useState } from 'react';

interface DeliveryOrder {
  id: number; // Identificador do pedido
  customer: string; // Nome do cliente
  address: string; // Endereço do cliente
  deliveryFee: number; // Taxa de entrega
}

export default function DeliveryList() {
  const [deliveryOrders, setDeliveryOrders] = useState<DeliveryOrder[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<DeliveryOrder | null>(null);

  useEffect(() => {
    // Recupera pedidos de entrega do localStorage
    const savedDeliveryOrders = localStorage.getItem('deliveryOrders');
    if (savedDeliveryOrders) {
      setDeliveryOrders(JSON.parse(savedDeliveryOrders));
    }
  }, []);

  const handleOrderClick = (order: DeliveryOrder) => {
    setSelectedOrder(order); // Seleciona o pedido para mostrar os detalhes
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Pedidos Prontos para Entrega</h1>

      {selectedOrder ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Detalhes do Pedido #{selectedOrder.id}</h2>
          <p>Cliente: {selectedOrder.customer}</p>
          <p>Endereço: {selectedOrder.address}</p>
          <p>Valor a Receber: R$ {selectedOrder.deliveryFee.toFixed(2)}</p>

          <button
            className="mt-4 text-blue-500 underline"
            onClick={() => setSelectedOrder(null)} // Voltar à lista de pedidos
          >
            Voltar à lista de pedidos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {deliveryOrders.map((order) => (
            <div key={order.id} className="border p-4 rounded-lg cursor-pointer" onClick={() => handleOrderClick(order)}>
              <h2 className="font-semibold">Pedido #{order.id}</h2>
              <p>Cliente: {order.customer}</p>
              <p>Endereço: {order.address}</p>
              <p>Taxa de Entrega: R$ {order.deliveryFee.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

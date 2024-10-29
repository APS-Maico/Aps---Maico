import React, { useState, useEffect } from 'react';

interface Order {
  orderId: number;
  customer: string;
  address: string;
  deliveryFee: number;
  status: string;
}

export default function MotoboyDashboard() {
  const [ordersInTransit, setOrdersInTransit] = useState<Order[]>([]);

  useEffect(() => {
    const ordersInTransit = Object.keys(localStorage)
      .filter(key => key.startsWith('order-'))
      .map(key => JSON.parse(localStorage.getItem(key) || ''))
      .filter((order: Order) => order.status === 'Pedido a caminho');
    
    console.log('Pedidos a caminho recuperados:', ordersInTransit); // Debug
  
    setOrdersInTransit(ordersInTransit);
  }, []);
  

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Pedidos para Entrega</h1>
      <div className="grid grid-cols-1 gap-4">
        {ordersInTransit.length > 0 ? (
          ordersInTransit.map((order) => (
            <div key={order.orderId} className="border p-4 rounded-lg">
              <h2 className="font-semibold">Pedido #{order.orderId}</h2>
              <p>Cliente: {order.customer}</p>
              <p>Endereço: {order.address}</p>
              <p>Valor da Corrida: R$ {order.deliveryFee.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p>Nenhum pedido disponível para entrega.</p>
        )}
      </div>
    </div>
  );
}

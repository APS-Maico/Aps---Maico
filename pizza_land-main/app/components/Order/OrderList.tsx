import React from 'react';
import { PizzaType } from '@/types/types';
 
interface Order {
  customer: string;
  pizzas: PizzaType[];
}
 
interface OrderListProps {
  orders: Order[]; // Lista de pedidos passada como prop
  onOrderClick: (order: Order) => void; // Função chamada ao clicar no pedido
}

const OrderList: React.FC<OrderListProps> = ({ orders, onOrderClick }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Pedidos a Preparar</h2>
      {orders.length > 0 ? (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li
              key={order.id} // Use order.id como chave
              className="border border-gray-300 rounded-md p-4 cursor-pointer"
              onClick={() => onOrderClick(order)} // Chama onOrderClick quando o pedido é clicado
            >
              <span className="font-medium text-lg">Cliente: {order.customer}</span>
              <ul className="space-y-2 mt-2">
                {order.pizzas.map((pizza: PizzaType, pizzaIndex: number) => (
                  <li key={pizzaIndex} className="flex justify-between items-center">
                    <span className="font-medium">Sabor: {pizza.name}</span>
                    <span className="text-sm text-gray-500">Quantidade: {pizza.quantity}</span>
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
};

export default OrderList;

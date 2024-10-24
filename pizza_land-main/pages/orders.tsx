import React, { useEffect, useState } from 'react';
import OrderList from '@/components/Order/OrderList'; // Certifique-se de que o caminho está correto
import { PizzaType } from '@/types/types';
import HorizontalNonLinearStepper from '@/components/stepper/stepper';
interface Order {
  customer: string;
  pizzas: PizzaType[];
}
 
const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
 
  // Carrega os pedidos do localStorage
  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      const parsedOrders: Order[] = JSON.parse(savedOrders);
      setOrders(parsedOrders);
    }
  }, []);
 
  // Função chamada ao clicar no pedido
  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order); // Define o pedido selecionado
  };
 
  return (
    <section className="cursor-default">
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">Tela do Funcionário</h1>
 
        {selectedOrder ? (
          <div>
            <h3 className="text-lg font-semibold">Cliente: {selectedOrder.customer}</h3>
            <HorizontalNonLinearStepper /> {/* Renderiza o Stepper */}
            <button
              className="mt-4 text-blue-500"
              onClick={() => setSelectedOrder(null)} // Volta para a lista de pedidos
            >
              Voltar aos Pedidos
            </button>
          </div>
        ) : (
          <OrderList orders={orders} onOrderClick={handleOrderClick} /> // Passa as props corretamente
        )}
      </div>
    </section>
  );
};
 
export default OrdersPage;
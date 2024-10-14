import { useCartContext } from '@/context/cart.context';
import { DataProps, Order, PaymentFormProps } from '@/types/types';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import QRCode from '@/public/qrcode.png';

export const PaymentForm: React.FC<PaymentFormProps> = ({
  setSuccessMsg,
  setCustomerIdentity,
}) => {
  const { totalPrice, cart } = useCartContext();

  const firstNameRef = React.useRef<HTMLInputElement | null>(null);
  const lastNameRef = React.useRef<HTMLInputElement | null>(null);
  const phoneRef = React.useRef<HTMLInputElement | null>(null);
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const streetNameRef = React.useRef<HTMLInputElement | null>(null);
  const streetNumberRef = React.useRef<HTMLInputElement | null>(null);
  const blockRef = React.useRef<HTMLInputElement | null>(null);
  const floorRef = React.useRef<HTMLInputElement | null>(null);
  const aptRef = React.useRef<HTMLInputElement | null>(null);
  const mentionsRef = React.useRef<HTMLTextAreaElement | null>(null);

  const [paymentMethod, setPaymentMethod] = useState<string>('');

  const cardNumberRef = React.useRef<HTMLInputElement | null>(null);
  const cardExpiryRef = React.useRef<HTMLInputElement | null>(null);
  const cardCVVRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let data: DataProps;
      const firstName = firstNameRef?.current?.value;
      const lastName = lastNameRef?.current?.value;
      const phone = phoneRef?.current?.value;
      const email = emailRef?.current?.value;
      const streetName = streetNameRef?.current?.value;
      const streetNumber = streetNumberRef?.current?.value;
      const apt = aptRef?.current?.value;
      const block = blockRef?.current?.value;
      const floor = floorRef?.current?.value;
      const mentions = mentionsRef?.current?.value;

      if (!firstName || !lastName || !phone || !email || !streetName || !streetNumber || !paymentMethod) {
        toast.error('Você precisa preencher todos os campos obrigatórios!');
        return;
      }

      if (paymentMethod === 'credit' || paymentMethod === 'debit') {
        const cardNumber = cardNumberRef?.current?.value;
        const cardExpiry = cardExpiryRef?.current?.value;
        const cardCVV = cardCVVRef?.current?.value;

        if (!cardNumber || !cardExpiry || !cardCVV) {
          toast.error('Você precisa preencher os dados do cartão!');
          return;
        }
      }

      data = {
        firstName,
        lastName,
        phone,
        email,
        street: `${streetNumber} ${streetName}`,
        apt,
        block,
        floor,
        mentions,
      };

      setCustomerIdentity(`${data.firstName} ${data.lastName}`);
      setSuccessMsg(true);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen lg:h-full flex flex-col lg:px-12 lg:py-8">
      <h2 className="mb-6 pt-6 text-center text-[20px] font-extrabold uppercase lg:pt-0 lg:text-left">
        Envio e finalização da compra
      </h2>
      <form
        className="flex-1 flex flex-col lg:flex-row lg:gap-x-4 overflow-y-auto"
        onSubmit={handleSubmit}
      >
        {/* Seção de Informações Pessoais */}
        <div className="flex-1 overflow-y-auto px-8 py-4 lg:px-0 lg:py-0 lg:max-h-[70vh]">
          <div className="flex h-full flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-x-4">
              <input
                name="firstname"
                type="text"
                className="input w-full"
                placeholder="First Name"
                ref={firstNameRef}
              />
              <input
                name="lastname"
                type="text"
                className="input w-full"
                placeholder="Last Name"
                ref={lastNameRef}
              />
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-x-4">
              <input
                name="phone-number"
                type="number"
                className="input w-full"
                placeholder="Phone"
                ref={phoneRef}
              />
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email Address"
                ref={emailRef}
              />
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-x-4">
              <input
                name="street-name"
                type="text"
                className="input w-full"
                placeholder="Street Name"
                ref={streetNameRef}
              />
              <input
                name="street-number"
                type="number"
                className="input w-full"
                placeholder="Street No."
                ref={streetNumberRef}
              />
            </div>
            <div className="flex justify-between gap-x-4">
              <input
                name="block"
                type="text"
                className="input w-full"
                placeholder="Block"
                ref={blockRef}
              />
              <input
                name="floor"
                type="number"
                className="input w-full"
                placeholder="Floor"
                ref={floorRef}
              />
              <input
                name="apt"
                type="number"
                className="input w-full"
                placeholder="Apt. No."
                ref={aptRef}
              />
            </div>
            <div className="h-full">
              <textarea
                name="mentions"
                className="textarea w-full"
                placeholder="Mentions (optional)"
                ref={mentionsRef}
              ></textarea>
            </div>

            {/* Método de Pagamento */}
            <div className="mt-6">
              <h3 className="mb-2 font-bold">Método de Pagamento:</h3>
              <div className="flex flex-col gap-2">
                <label>
                  <input
                    type="radio"
                    value="credit"
                    checked={paymentMethod === 'credit'}
                    onChange={() => setPaymentMethod('credit')}
                  />
                  Cartão de Crédito
                </label>
                <label>
                  <input
                    type="radio"
                    value="debit"
                    checked={paymentMethod === 'debit'}
                    onChange={() => setPaymentMethod('debit')}
                  />
                  Cartão de Débito
                </label>
                <label>
                  <input
                    type="radio"
                    value="pix"
                    checked={paymentMethod === 'pix'}
                    onChange={() => setPaymentMethod('pix')}
                  />
                  PIX
                </label>
              </div>
            </div>

            {/* Campos do Cartão */}
            {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
              <div className="mt-4">
                <div className="flex flex-col gap-4">
                  <input
                    name="card-number"
                    type="text"
                    className="input w-full"
                    placeholder="Número do Cartão"
                    ref={cardNumberRef}
                  />
                  <input
                    name="card-expiry"
                    type="text"
                    className="input w-full"
                    placeholder="Data de Expiração (MM/AA)"
                    ref={cardExpiryRef}
                  />
                  <input
                    name="card-cvv"
                    type="text"
                    className="input w-full"
                    placeholder="CVV"
                    ref={cardCVVRef}
                  />
                </div>
              </div>
            )}
            {/* Exibição do QR Code para Pix */}
              {paymentMethod === 'pix' && (
              <div className="mt-4 flex flex-col items-center">
                <p className="mb-2">Faça o pagamento via Pix usando o QR Code abaixo:</p>
                <img src={QRCode.src} alt="QR Code para Pagamento via Pix" className="w-48 h-48" />
              </div>
           )}
          </div>
        </div>

        {/* Seção de Resumo do Pedido */}
        <div className="flex h-full flex-1 flex-col justify-between px-8 pt-3 lg:max-w-[40%] lg:p-0 lg:overflow-y-auto">
          <div className="mb-4 flex flex-col rounded-lg border p-4">
            <h3 className="mb-4 border-b pb-4 text-base font-extrabold uppercase">
              Seu pedido
            </h3>
            <div className="flex h-[240px] flex-col gap-y-4 overflow-hidden overflow-y-auto py-2">
              {cart.map((pizza: Order, index: number) => {
                return (
                  <div key={index} className="flex justify-between text-[15px]">
                    <div className="flex gap-x-2">
                      <div className="capitalize">{pizza.name}</div>
                      <div>{pizza.quantity > 1 && `x ${pizza.quantity}`}</div>
                    </div>
                    <div>R${(pizza.price * pizza.quantity).toFixed(2)}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <button className="btn btn-lg gradient w-full" type="submit">
            Pagar R${totalPrice.toFixed(2)}
          </button>
        </div>
      </form>
    </div>
  );
};

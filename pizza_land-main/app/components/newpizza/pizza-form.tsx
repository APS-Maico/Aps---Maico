import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { PizzaType, ToppingType } from '@/types/types';
 
export const PizzaForm: React.FC<{ addNewPizza: (pizza: PizzaType) => void }> = ({ addNewPizza }) => {
  const nameRef = React.useRef<HTMLInputElement | null>(null);
  const descriptionRef = React.useRef<HTMLTextAreaElement | null>(null);
  const priceLgRef = React.useRef<HTMLInputElement | null>(null);
  const priceMdRef = React.useRef<HTMLInputElement | null>(null);
  const priceSmRef = React.useRef<HTMLInputElement | null>(null);
  const imageRef = React.useRef<HTMLInputElement | null>(null);
 
  // Estado para os toppings
  const [toppings, setToppings] = useState<{ name: string; image: string; price: number; file: File | null }[]>([{ name: '', image: '', price: 0, file: null }]);
 
  const handleToppingChange = (index: number, field: string, value: string) => {
    const newToppings = [...toppings];
    if (field === 'name') newToppings[index].name = value;
    if (field === 'image') newToppings[index].image = value;
    if (field === 'price') newToppings[index].price = parseFloat(value);
    setToppings(newToppings);
  };
 
  const handleImageChange = (index: number, file: File | null) => {
    const newToppings = [...toppings];
    if (file) {
      newToppings[index].file = file; // Armazena o arquivo da imagem
      const reader = new FileReader();
      reader.onloadend = () => {
        newToppings[index].image = reader.result as string; // Armazena a URL da imagem no estado
        setToppings(newToppings);
      };
      reader.readAsDataURL(file); // Lê o arquivo como URL
    }
  };
 
  const addToppingField = () => {
    setToppings([...toppings, { name: '', image: '', price: 0, file: null }]);
  };
 
  const removeToppingField = (index: number) => {
    const newToppings = toppings.filter((_, i) => i !== index);
    setToppings(newToppings);
  };
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    const name = nameRef.current?.value;
    const description = descriptionRef.current?.value;
    const priceLg = priceLgRef.current?.value;
    const priceMd = priceMdRef.current?.value;
    const priceSm = priceSmRef.current?.value;
    const imageFile = imageRef.current?.files?.[0]; // Captura o arquivo da imagem principal
 
    if (!name || !description || !priceLg || !priceMd || !priceSm || !imageFile || toppings.some(t => !t.name || !t.image || !t.price)) {
      toast.error('Please fill in all fields!');
      return;
    }
 
    const reader = new FileReader();
    reader.readAsDataURL(imageFile); // Lê a imagem como URL
 
    reader.onloadend = () => {
      const newPizza: PizzaType = {
        id: Date.now(),
        name,
        description,
        priceLg: parseFloat(priceLg),
        priceMd: parseFloat(priceMd),
        priceSm: parseFloat(priceSm),
        image: reader.result as string, // A URL da imagem principal
        toppings: toppings.map(topping => ({
          name: topping.name,
          image: topping.image,
          price: topping.price,
        })) as ToppingType[],
          quantity: 1,
      };
 
      addNewPizza(newPizza);
      toast.success('Pizza adicionada com sucesso!');
    };
  };
 
  return (
    <div className='h-full w-full p-4'>
      <h2 className='mb-6 text-center text-[20px] font-extrabold uppercase'>Adicionar nova Pizza</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input ref={nameRef} placeholder="Nome da Pizza" className='input w-full' required />
        <textarea ref={descriptionRef} placeholder="Descrição" className='textarea w-full h-32' required></textarea>
        <input ref={priceLgRef} type="number" placeholder="Preço (Grande)" className='input w-full' required />
        <input ref={priceMdRef} type="number" placeholder="Preço (Média)" className='input w-full' required />
        <input ref={priceSmRef} type="number" placeholder="Preço (Pequena)" className='input w-full' required />
        <input
          ref={imageRef}
          type="file"
          accept="image/*" // Aceitar apenas imagens
          className='input w-full'
          required
        />
 
        {/* Renderiza campos de toppings */}
        {toppings.map((topping, index) => (
          <div key={index} className='flex gap-2'>
            <input
              type="text"
              placeholder="Adicionais"
              value={topping.name}
              onChange={(e) => handleToppingChange(index, 'name', e.target.value)}
              className='input flex-1'
              required
            />
            <input
              type="file" // Campo de entrada para a imagem do topping
              accept="image/*" // Aceitar apenas imagens
              onChange={(e) => handleImageChange(index, e.target.files?.[0] || null)}
              className='input flex-1'
              required
            />
            <input
              type="number"
              placeholder="Preço Adicional"
              value={topping.price}
              onChange={(e) => handleToppingChange(index, 'price', e.target.value)}
              className='input w-24'
              required
              style={{ appearance: 'textfield' }}
            />
            <button type="button" onClick={() => removeToppingField(index)} className='btn btn-danger'>Remover</button>
          </div>
        ))}
        <button type="button" onClick={addToppingField} className='btn btn-secondary'>Adicionar Adicional</button>
 
        <button type="submit" className='btn btn-lg gradient w-full'>Adicionar Pizza</button>
      </form>
    </div>
  );
};

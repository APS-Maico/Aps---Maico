import { PizzaType } from "@/types/types";

export async function getAllPizzas(): Promise<PizzaType[] | undefined> {
  const URL = process.env.DATA_URL;
  try {
    const res = await fetch(`${URL}`);

    if (!res.ok) {
      throw new Error("Falha ao buscar dados");
    }

    const data = await res.json();

    const { pizzas } = data;

    return pizzas;
  } catch (error: unknown) {
    console.log(error);
  }
}

import { env } from "@/env";

const API_URL = env.API_URL;

interface GetMealParams {
  price?: number;
}

export const mealService = {
  getMeal: async function (params?: GetMealParams) {
    try {
      const url = new URL(`${API_URL}/api/meals`);
      const res = await fetch(url.toString());
      const data = await res.json();
      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something went wrong." } };
    }
  },
};

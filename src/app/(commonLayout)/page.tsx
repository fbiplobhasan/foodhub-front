import { ProductCard1 } from "@/components/modules/homepage/product-card1";
import { Button } from "@/components/ui/button";
import { mealService } from "@/services/meal.service";
import { IMeal } from "@/types";

export default async function Home() {
  const { data } = await mealService.getMeal();
  console.log(data);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {data?.map((meal: IMeal) => (
        <ProductCard1 key={meal.id} meal={meal} />
      ))}
    </div>
  );
}

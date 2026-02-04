import { cn } from "@/lib/utils";

import { Price, PriceValue } from "@/components/modules/homepage/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IMeal } from "@/types";
import Link from "next/link";

interface ProductPrice {
  regular: number;
  sale?: number;
  currency: string;
}

interface Product {
  name: string;
  image: {
    src: string;
    alt: string;
  };
  link: string;
  description: string;
  price: ProductPrice;
  badge: {
    text: string;
    backgroundColor?: string;
  };
}

const PRODUCT_CARD: Product = {
  name: "Vexon CoreStep '08 LX",
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/joshua-diaz-ETNoDLl8yFE-unsplash-1.jpg",
    alt: "",
  },
  link: "#",
  description:
    "Everyday comfort meets bold tri-color style in this performance-driven design.",
  price: {
    regular: 499.0,
    sale: 399.0,
    currency: "USD",
  },
  badge: {
    text: "Selling fast!",
    backgroundColor: "oklch(50.5% 0.213 27.518)",
  },
};

interface ProductCard1Props {
  className?: string;
  meal?: IMeal;
}

const ProductCard1 = ({ className, meal }: ProductCard1Props) => {
  if (!meal) return null;

  const { name, description, price, image, dietaryType, category, id } =
    meal || {};

  const { currency } = PRODUCT_CARD.price;

  return (
    <Link
      href={`/api/meals/${meal.id}`}
      className={cn(
        "block max-w-md transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Card className="h-full overflow-hidden p-0">
        <CardHeader className="relative block p-0">
          <AspectRatio ratio={1.268115942} className="overflow-hidden">
            <img
              src={image}
              alt={name}
              className="block size-full object-cover object-center"
            />
          </AspectRatio>

          <Badge
            className={cn(
              "absolute start-4 top-4",
              dietaryType === "VEG" ? "bg-green-500" : "bg-red-500",
            )}
          >
            {dietaryType}
          </Badge>
        </CardHeader>

        <CardContent className="flex h-full flex-col gap-4 pb-6">
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase text-muted-foreground">
              {category.name}
            </p>
            <CardTitle className="text-xl font-semibold">{name}</CardTitle>
          </div>

          <CardDescription className="line-clamp-2 font-medium text-muted-foreground">
            {description}
          </CardDescription>

          <div className="mt-auto">
            <Price className="text-lg font-semibold">
              <PriceValue price={price} currency={currency} variant="regular" />
            </Price>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export { ProductCard1 };

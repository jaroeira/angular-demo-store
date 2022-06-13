export interface Product {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  rating: number;
  price: number;
  description: string;
}

export function transformFromJSON(data: any): Product {
  return {
    id: data.id,
    title: data.title,
    imageUrl: data.image,
    description: data.description,
    category: data.category,
    rating: Math.round(+data.rating.rate),
    price: data.price,
  };
}

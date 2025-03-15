export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  description: string;
  specifications: Record<string, string>;
  imageUrl: string;
}

export interface User {
  email: string;
  password: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type SortOption = 'price-asc' | 'price-desc';

export type Category = 'CPU' | 'GPU' | 'RAM' | 'SSD' | 'Keyboard' | 'Mouse' | 'Monitor';
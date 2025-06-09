export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ecoRating: number;
  ecoFeatures: string[];
  inStock: boolean;
  material: string;
  origin: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  category: string;
  minEcoRating: number;
  priceRange: [number, number];
  searchQuery: string;
}

export interface OrderForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  district: string;
  deliveryTime: string;
  paymentMethod: string;
  comment: string;
}

export type Page = 'home' | 'about' | 'contacts';
import { useLocalStorage } from './useLocalStorage';
import { CartItem, Product } from '../types';

export function useCart() {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('eco-store-cart', []);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(current => {
      const existingItem = current.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return current.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...current, { product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(current => current.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(current =>
      current.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => 
    total + (item.product.price * item.quantity), 0
  );

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount
  };
}
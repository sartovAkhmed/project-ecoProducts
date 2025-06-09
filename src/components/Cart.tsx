import React from 'react';
import { X, Plus, Minus, Truck } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  cartTotal: number;
  onCheckout: () => void;
}

export function Cart({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  cartTotal,
  onCheckout 
}: CartProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Корзина</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Корзина пуста</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex space-x-3 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm">
                        {item.product.name}
                      </h4>
                      <p className="text-green-600 font-semibold">
                        {item.product.price.toLocaleString()} ₸
                      </p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Удалить
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-4 space-y-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Итого:</span>
                <span>{cartTotal.toLocaleString()} ₸</span>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg flex items-center space-x-2 text-sm text-green-700">
                <Truck className="w-4 h-4" />
                <span>Бесплатная доставка по Бишкеку от 2000 ₸</span>
              </div>
              
              <button 
                onClick={onCheckout}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Оформить заказ
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
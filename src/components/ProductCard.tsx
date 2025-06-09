import React from 'react';
import { ShoppingCart, Package, MapPin } from 'lucide-react';
import { Product } from '../types';
import { EcoRating } from './EcoRating';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Нет в наличии
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <EcoRating rating={product.ecoRating} size="sm" />
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 text-lg leading-tight">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-xs text-gray-500">
            <Package className="w-3 h-3 mr-1" />
            {product.material}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <MapPin className="w-3 h-3 mr-1" />
            {product.origin}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {product.ecoFeatures.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
          {product.ecoFeatures.length > 2 && (
            <span className="text-xs text-gray-500">
              +{product.ecoFeatures.length - 2}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            {product.price.toLocaleString()} ₸
          </div>
          
          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
              product.inStock
                ? 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
}
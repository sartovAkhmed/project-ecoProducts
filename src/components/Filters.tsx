import React from 'react';
import { FilterState } from '../types';
import { categories } from '../data/products';
import { EcoRating } from './EcoRating';

interface FiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export function Filters({ filters, onFiltersChange }: FiltersProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Фильтры</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Категория
          </label>
          <select
            value={filters.category}
            onChange={(e) => onFiltersChange({ ...filters, category: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Минимальный эко-рейтинг
          </label>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  type="radio"
                  name="ecoRating"
                  value={rating}
                  checked={filters.minEcoRating === rating}
                  onChange={(e) => onFiltersChange({ 
                    ...filters, 
                    minEcoRating: parseInt(e.target.value) 
                  })}
                  className="mr-3 text-green-600 focus:ring-green-500"
                />
                <EcoRating rating={rating} size="sm" />
                <span className="ml-2 text-sm text-gray-600">и выше</span>
              </label>
            ))}
            <label className="flex items-center">
              <input
                type="radio"
                name="ecoRating"
                value={0}
                checked={filters.minEcoRating === 0}
                onChange={() => onFiltersChange({ ...filters, minEcoRating: 0 })}
                className="mr-3 text-green-600 focus:ring-green-500"
              />
              <span className="text-sm text-gray-600">Любой рейтинг</span>
            </label>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Цена (₸)
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="От"
              value={filters.priceRange[0] || ''}
              onChange={(e) => onFiltersChange({ 
                ...filters, 
                priceRange: [parseInt(e.target.value) || 0, filters.priceRange[1]] 
              })}
              className="w-1/2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="До"
              value={filters.priceRange[1] || ''}
              onChange={(e) => onFiltersChange({ 
                ...filters, 
                priceRange: [filters.priceRange[0], parseInt(e.target.value) || 99999] 
              })}
              className="w-1/2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <button
          onClick={() => onFiltersChange({
            category: 'Все категории',
            minEcoRating: 0,
            priceRange: [0, 99999],
            searchQuery: ''
          })}
          className="w-full py-2 px-4 text-sm text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
        >
          Сбросить фильтры
        </button>
      </div>
    </div>
  );
}
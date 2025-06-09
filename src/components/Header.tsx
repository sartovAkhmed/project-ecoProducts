import React from 'react';
import { ShoppingCart, Leaf, Search } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export function Header({ 
  cartCount, 
  onCartClick, 
  searchQuery, 
  onSearchChange,
  currentPage,
  onPageChange 
}: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onPageChange('home')}
          >
            <Leaf className="w-8 h-8 text-green-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">ЭкоДом</h1>
              <p className="text-xs text-green-600">Бишкек</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onPageChange('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-green-600 border-b-2 border-green-600 pb-1' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Каталог
            </button>
            <button
              onClick={() => onPageChange('about')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'about' 
                  ? 'text-green-600 border-b-2 border-green-600 pb-1' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              О нас
            </button>
            <button
              onClick={() => onPageChange('contacts')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'contacts' 
                  ? 'text-green-600 border-b-2 border-green-600 pb-1' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Контакты
            </button>
          </nav>
          
          {currentPage === 'home' && (
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Поиск эко товаров..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          <button
            onClick={onCartClick}
            className="relative p-2 text-gray-600 hover:text-green-600 transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
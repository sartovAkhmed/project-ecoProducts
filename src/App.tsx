import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { Filters } from './components/Filters';
import { Cart } from './components/Cart';
import { OrderForm } from './components/OrderForm';
import { AboutPage } from './components/AboutPage';
import { ContactsPage } from './components/ContactsPage';
import { Footer } from './components/Footer';
import { useCart } from './hooks/useCart';
import { products } from './data/products';
import { FilterState, Page } from './types';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [filters, setFilters] = useState<FilterState>({
    category: 'Все категории',
    minEcoRating: 0,
    priceRange: [0, 99999],
    searchQuery: ''
  });

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    clearCart
  } = useCart();

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = filters.category === 'Все категории' || product.category === filters.category;
      const matchesEcoRating = product.ecoRating >= filters.minEcoRating;
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const matchesSearch = filters.searchQuery === '' || 
        product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.searchQuery.toLowerCase());
      
      return matchesCategory && matchesEcoRating && matchesPrice && matchesSearch;
    });
  }, [filters]);

  const handleSearchChange = (query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsOrderFormOpen(true);
  };

  const handleOrderComplete = () => {
    clearCart();
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'contacts':
        return <ContactsPage />;
      default:
        return (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Экологичные товары для дома
              </h1>
              <p className="text-gray-600">
                Найдено товаров: {filteredProducts.length}
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              <aside className="lg:w-64 flex-shrink-0">
                <Filters filters={filters} onFiltersChange={setFilters} />
              </aside>
              
              <div className="flex-1">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="text-gray-400 mb-4">
                      <svg className="w-16 h-16 mx-auto\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24">
                        <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Товары не найдены
                    </h3>
                    <p className="text-gray-600">
                      Попробуйте изменить фильтры или поисковый запрос
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={filters.searchQuery}
        onSearchChange={handleSearchChange}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      
      {renderCurrentPage()}
      
      <Footer />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        cartTotal={cartTotal}
        onCheckout={handleCheckout}
      />

      <OrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        cartItems={cartItems}
        cartTotal={cartTotal}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
}

export default App;
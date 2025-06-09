import React from 'react';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-6 h-6 text-green-400" />
              <div>
                <h3 className="text-lg font-bold">ЭкоДом</h3>
                <p className="text-sm text-green-400">Бишкек</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Экологически чистые товары для дома. Заботимся о вашем доме и природе.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Категории</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">Кухонные принадлежности</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Уборка и уход</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Текстиль и декор</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Хранение</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Доставка</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Возврат</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Гарантии</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+996 (555) 123-456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@ecodom.kg</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>г. Бишкек, ул. Чуй 200</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 ЭкоДом. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
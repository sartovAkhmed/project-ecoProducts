import React from 'react';
import { Leaf, Heart, Shield, Truck, Award, Users, Globe, Recycle } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">О нас</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          ЭкоДом — это больше чем магазин. Мы миссия по созданию экологически чистого будущего для Бишкека и всего Кыргызстана.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src="https://images.pexels.com/photos/6995251/pexels-photo-6995251.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Эко товары"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша история</h2>
          <p className="text-gray-600 mb-4">
            ЭкоДом был основан в 2022 году группой энтузиастов, которые заметили острую нехватку 
            экологически чистых товаров для дома в Бишкеке. Мы начали с небольшого ассортимента 
            бамбуковых изделий и натуральных моющих средств.
          </p>
          <p className="text-gray-600">
            Сегодня мы предлагаем более 200 наименований эко товаров от проверенных производителей 
            со всего мира, помогая жителям Бишкека делать осознанный выбор в пользу экологии.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Наши ценности</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Экология</h3>
            <p className="text-gray-600 text-sm">
              Все товары проходят строгий отбор по экологическим критериям
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Качество</h3>
            <p className="text-gray-600 text-sm">
              Работаем только с проверенными производителями и брендами
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Забота</h3>
            <p className="text-gray-600 text-sm">
              Заботимся о здоровье наших клиентов и планете
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Сервис</h3>
            <p className="text-gray-600 text-sm">
              Быстрая доставка и высокий уровень обслуживания
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <Award className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Сертифицированные товары</h3>
              <p className="text-gray-600 text-sm">
                Все товары имеют международные экологические сертификаты
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Users className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Экспертная команда</h3>
              <p className="text-gray-600 text-sm">
                Наши специалисты помогут выбрать подходящие эко решения
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Globe className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Глобальная сеть</h3>
              <p className="text-gray-600 text-sm">
                Партнерство с ведущими эко производителями мира
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша миссия</h2>
          <p className="text-gray-600 mb-4">
            Сделать экологически чистый образ жизни доступным для каждой семьи в Бишкеке. 
            Мы верим, что небольшие изменения в повседневной жизни могут привести к большим 
            положительным изменениям для окружающей среды.
          </p>
          <div className="flex items-center space-x-2 text-green-600">
            <Recycle className="w-5 h-5" />
            <span className="font-semibold">Вместе за чистое будущее!</span>
          </div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/6197118/pexels-photo-6197118.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Экологичный дом"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Статистика нашего влияния</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">2,500+</div>
            <p className="text-gray-300">Довольных клиентов</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">15,000+</div>
            <p className="text-gray-300">Эко товаров продано</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">500 кг</div>
            <p className="text-gray-300">Пластика сэкономлено</p>
          </div>
        </div>
      </div>
    </div>
  );
}
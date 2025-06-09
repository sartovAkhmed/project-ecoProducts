import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Car, CreditCard } from 'lucide-react';

export function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Симуляция отправки
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h1>
        <p className="text-xl text-gray-600">
          Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Наши контакты</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Адрес магазина</h3>
                <p className="text-gray-600">г. Бишкек, ул. Чуй 200</p>
                <p className="text-gray-600">ТЦ "Вефа Центр", 2 этаж</p>
                <p className="text-sm text-green-600 mt-1">Рядом с остановкой "Филармония"</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Телефоны</h3>
                <p className="text-gray-600">+996 (555) 123-456 - Основной</p>
                <p className="text-gray-600">+996 (777) 987-654 - WhatsApp</p>
                <p className="text-sm text-green-600 mt-1">Звонки принимаем с 9:00 до 21:00</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">info@ecodom.kg</p>
                <p className="text-gray-600">support@ecodom.kg</p>
                <p className="text-sm text-green-600 mt-1">Отвечаем в течение 2 часов</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Режим работы</h3>
                <p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p>
                <p className="text-gray-600">Сб-Вс: 10:00 - 18:00</p>
                <p className="text-sm text-green-600 mt-1">Доставка работает до 21:00</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-3">Социальные сети</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Напишите нам</h2>
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Сообщение отправлено!</h3>
              <p className="text-gray-600">Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тема обращения
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Выберите тему</option>
                  <option value="order">Вопрос по заказу</option>
                  <option value="product">Вопрос о товаре</option>
                  <option value="delivery">Доставка</option>
                  <option value="return">Возврат/обмен</option>
                  <option value="cooperation">Сотрудничество</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Опишите ваш вопрос подробно..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Отправляем...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Отправить сообщение</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
          <Car className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-900 mb-2">Доставка</h3>
          <p className="text-sm text-gray-600">По Бишкеку 1-2 дня</p>
          <p className="text-sm text-green-600">Бесплатно от 2000 ₸</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
          <CreditCard className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-900 mb-2">Оплата</h3>
          <p className="text-sm text-gray-600">Наличные, карта</p>
          <p className="text-sm text-blue-600">Банковский перевод</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
          <Phone className="w-8 h-8 text-purple-600 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-900 mb-2">Поддержка</h3>
          <p className="text-sm text-gray-600">9:00 - 21:00</p>
          <p className="text-sm text-purple-600">Ежедневно</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
          <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-900 mb-2">Самовывоз</h3>
          <p className="text-sm text-gray-600">ТЦ Вефа Центр</p>
          <p className="text-sm text-orange-600">Бесплатно</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Как нас найти</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Схема проезда</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p><strong>На общественном транспорте:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Автобусы: №1, №5, №12 до остановки "Филармония"</li>
                <li>Маршрутки: №101, №105, №120</li>
                <li>Троллейбусы: №4, №8</li>
              </ul>
              
              <p className="mt-4"><strong>На автомобиле:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Парковка в ТЦ "Вефа Центр" - бесплатно 2 часа</li>
                <li>Дополнительная парковка на ул. Токтогула</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p>Интерактивная карта</p>
              <p className="text-sm">г. Бишкек, ул. Чуй 200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
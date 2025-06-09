import React, { useState } from "react";
import { X, CheckCircle, Truck, CreditCard, Clock } from "lucide-react";
import { OrderForm as OrderFormType, CartItem } from "../types";

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  cartTotal: number;
  onOrderComplete: () => void;
}

const districts = [
  "Свердловский район",
  "Октябрьский район",
  "Первомайский район",
  "Ленинский район",
];

const deliveryTimes = [
  "9:00 - 12:00",
  "12:00 - 15:00",
  "15:00 - 18:00",
  "18:00 - 21:00",
];

export function OrderForm({
  isOpen,
  onClose,
  cartItems,
  cartTotal,
  onOrderComplete,
}: OrderFormProps) {
  const [formData, setFormData] = useState<OrderFormType>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    district: districts[0],
    deliveryTime: deliveryTimes[0],
    paymentMethod: "cash",
    comment: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Симуляция отправки заказа
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      onOrderComplete();
      onClose();
      setIsSuccess(false);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        district: districts[0],
        deliveryTime: deliveryTimes[0],
        paymentMethod: "cash",
        comment: "",
      });
    }, 3000);
  };

  const handleChange = (field: keyof OrderFormType, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const deliveryFee = cartTotal >= 2000 ? 0 : 200;
  const totalWithDelivery = cartTotal + deliveryFee;

  if (!isOpen) return null;

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Заказ оформлен!
            </h2>
            <p className="text-gray-600 mb-4">
              Спасибо за заказ! Мы свяжемся с вами в течение 30 минут для
              подтверждения.
            </p>
            <p className="text-sm text-gray-500">
              Номер заказа: #
              {Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-xl overflow-y-auto">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Оформление заказа
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 p-6 space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Ваш заказ</h3>
              <div className="space-y-2 mb-4">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex justify-between text-sm"
                  >
                    <span>
                      {item.product.name} × {item.quantity}
                    </span>
                    <span>
                      {(item.product.price * item.quantity).toLocaleString()}{" "}
                      сом
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-2 space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Товары:</span>
                  <span>{cartTotal.toLocaleString()} сом</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Доставка:</span>
                  <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                    {deliveryFee === 0 ? "Бесплатно" : `${deliveryFee} сом`}
                  </span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Итого:</span>
                  <span>{totalWithDelivery.toLocaleString()} сом</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Фамилия *
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+996 (555) 123-456"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Район *
              </label>
              <select
                required
                value={formData.district}
                onChange={(e) => handleChange("district", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Адрес доставки *
              </label>
              <input
                type="text"
                required
                placeholder="Улица, дом, квартира"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4 inline mr-1" />
                Время доставки
              </label>
              <select
                value={formData.deliveryTime}
                onChange={(e) => handleChange("deliveryTime", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {deliveryTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <CreditCard className="w-4 h-4 inline mr-1" />
                Способ оплаты
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === "cash"}
                    onChange={(e) =>
                      handleChange("paymentMethod", e.target.value)
                    }
                    className="mr-3 text-green-600 focus:ring-green-500"
                  />
                  <span>Наличными при получении</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={(e) =>
                      handleChange("paymentMethod", e.target.value)
                    }
                    className="mr-3 text-green-600 focus:ring-green-500"
                  />
                  <span>Картой при получении</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="transfer"
                    checked={formData.paymentMethod === "transfer"}
                    onChange={(e) =>
                      handleChange("paymentMethod", e.target.value)
                    }
                    className="mr-3 text-green-600 focus:ring-green-500"
                  />
                  <span>Банковский перевод</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Комментарий к заказу
              </label>
              <textarea
                rows={3}
                value={formData.comment}
                onChange={(e) => handleChange("comment", e.target.value)}
                placeholder="Дополнительная информация для курьера"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="bg-green-50 p-4 rounded-lg flex items-start space-x-3">
              <Truck className="w-5 h-5 text-green-600 mt-0.5" />
              <div className="text-sm text-green-700">
                <p className="font-semibold mb-1">Условия доставки:</p>
                <ul className="space-y-1">
                  <li>• Бесплатная доставка от 2000 сом</li>
                  <li>• Доставка в течение 1-2 дней</li>
                  <li>• Доставка только по Бишкеку</li>
                  <li>• Курьер свяжется за 30 минут до доставки</li>
                </ul>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Оформляем заказ...</span>
                </>
              ) : (
                <span>
                  Подтвердить заказ на {totalWithDelivery.toLocaleString()} сом
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

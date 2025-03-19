import React, { useState } from 'react';
import { MenuItem, Restaurant, OrderItem } from '../types';
import { menuItems } from '../data';
import { Plus, Minus, ShoppingCart, Info } from 'lucide-react';

export function Menu({
  restaurant,
  onPlaceOrder,
}: {
  restaurant: Restaurant;
  onPlaceOrder: (items: OrderItem[]) => void;
}) {
  const [orderItems, setOrderItems] = useState<Record<string, number>>({});
  const [specialInstructions, setSpecialInstructions] = useState<Record<string, string>>({});

  const menu = menuItems[restaurant.id];
  const categories = Array.from(new Set(menu.map((item) => item.category)));

  const updateQuantity = (itemId: string, delta: number) => {
    setOrderItems((prev) => {
      const newQuantity = (prev[itemId] || 0) + delta;
      if (newQuantity <= 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: newQuantity };
    });
  };

  const handlePlaceOrder = () => {
    const items: OrderItem[] = Object.entries(orderItems).map(([itemId, quantity]) => ({
      menuItem: menu.find((item) => item.id === itemId)!,
      quantity,
      specialInstructions: specialInstructions[itemId],
    }));
    onPlaceOrder(items);
  };

  const totalItems = Object.values(orderItems).reduce((sum, quantity) => sum + quantity, 0);
  const subtotal = Object.entries(orderItems).reduce(
    (sum, [itemId, quantity]) => {
      const item = menu.find((i) => i.id === itemId);
      return sum + (item?.price || 0) * quantity;
    },
    0
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">{restaurant.name}</h2>
            <p className="text-gray-600">{restaurant.description}</p>
            <div className="mt-2 flex items-center space-x-4">
              <span className="text-sm text-gray-500">🕒 {restaurant.deliveryTime}</span>
              <span className="text-sm text-gray-500">⭐ {restaurant.rating}</span>
              <span className="text-sm text-gray-500">💰 Min. ${restaurant.minimumOrder}</span>
            </div>
          </div>
          {!restaurant.isOpen && (
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
              Closed
            </div>
          )}
        </div>
      </div>

      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{category}</h3>
          <div className="space-y-4">
            {menu
              .filter((item) => item.category === category)
              .map((item) => (
                <div
                  key={item.id}
                  className={`bg-white p-4 rounded-lg shadow-md ${
                    !item.isAvailable ? 'opacity-50' : ''
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h4 className="text-lg font-semibold">{item.name}</h4>
                        {item.isVegetarian && (
                          <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            Veg
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                      <p className="text-gray-800 font-medium mt-2">${item.price.toFixed(2)}</p>
                      {!item.isAvailable && (
                        <p className="text-red-600 text-sm mt-1">Currently unavailable</p>
                      )}
                      {orderItems[item.id] > 0 && (
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Special instructions..."
                            className="w-full p-2 text-sm border rounded"
                            value={specialInstructions[item.id] || ''}
                            onChange={(e) =>
                              setSpecialInstructions((prev) => ({
                                ...prev,
                                [item.id]: e.target.value,
                              }))
                            }
                          />
                        </div>
                      )}
                    </div>
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg ml-4"
                      />
                    )}
                  </div>
                  <div className="mt-4 flex justify-end items-center space-x-3">
                    {item.isAvailable && (
                      <>
                        {orderItems[item.id] ? (
                          <>
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="font-medium">{orderItems[item.id]}</span>
                          </>
                        ) : null}
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                        >
                          <Plus size={16} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      {totalItems > 0 && (
        <div className="fixed bottom-6 right-6 left-6 md:left-auto">
          <div className="bg-white p-4 rounded-lg shadow-lg md:w-72">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow flex items-center justify-center space-x-2 hover:bg-blue-700"
              disabled={subtotal < restaurant.minimumOrder}
            >
              <ShoppingCart size={20} />
              <span>
                Place Order ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </span>
            </button>
            {subtotal < restaurant.minimumOrder && (
              <p className="text-red-600 text-sm mt-2 text-center">
                Minimum order amount: ${restaurant.minimumOrder}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
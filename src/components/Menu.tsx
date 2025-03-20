import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { menuItems } from '../data';
import { MenuItem, Restaurant } from '../types';

export function Menu({ restaurant }: { restaurant: Restaurant }) {
  const { state, dispatch } = useCart();
  const [specialInstructions, setSpecialInstructions] = useState<Record<string, string>>({});

  const menu = menuItems[restaurant.id];
  console.log(menu);
  const categories = Array.from(new Set(menu.map((item) => item.category)));

  const addToCart = (item: MenuItem) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        menuItem: item,
        quantity: 1,
        instructions: specialInstructions[item.id],
      },
    });
  };

  const removeFromCart = (itemId: string) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: itemId,
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { itemId, quantity },
    });
  };

  const getItemQuantity = (itemId: string) => {
    const cartItem = state.items.find((item) => item.menuItem.id === itemId);
    return cartItem?.quantity || 0;
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{category}</h3>
          <div className="space-y-4">
            {menu
              .filter((item) => item.category === category)
              .map((item) => {
                const quantity = getItemQuantity(item.id);
                return (
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
                        {quantity > 0 && (
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
                          {quantity > 0 ? (
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, quantity - 1)}
                                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="font-medium">{quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, quantity + 1)}
                                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => addToCart(item)}
                              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                              <ShoppingCart size={16} className="mr-2" />
                              Add to Cart
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
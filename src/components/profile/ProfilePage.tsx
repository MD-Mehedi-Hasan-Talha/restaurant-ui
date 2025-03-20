import React from 'react';
import { Clock, MapPin, CreditCard } from 'lucide-react';

const orderHistory = [
  {
    id: '1',
    date: '2024-03-15',
    restaurant: 'Pasta Paradise',
    status: 'Delivered',
    total: 45.99,
    items: [
      { name: 'Spaghetti Carbonara', quantity: 2 },
      { name: 'Tiramisu', quantity: 1 },
    ],
  },
  {
    id: '2',
    date: '2024-03-10',
    restaurant: 'Burger Bliss',
    status: 'Delivered',
    total: 32.50,
    items: [
      { name: 'Classic Cheeseburger', quantity: 2 },
      { name: 'Truffle Fries', quantity: 1 },
    ],
  },
];

export function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <MapPin className="h-6 w-6 text-blue-600 mr-3" />
            <div>
              <h3 className="font-medium">Default Address</h3>
              <p className="text-sm text-gray-600">123 Main St, City</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <Clock className="h-6 w-6 text-blue-600 mr-3" />
            <div>
              <h3 className="font-medium">Member Since</h3>
              <p className="text-sm text-gray-600">March 2024</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <CreditCard className="h-6 w-6 text-blue-600 mr-3" />
            <div>
              <h3 className="font-medium">Payment Method</h3>
              <p className="text-sm text-gray-600">•••• 4242</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-6">Order History</h3>
        <div className="space-y-6">
          {orderHistory.map((order) => (
            <div
              key={order.id}
              className="border-b last:border-0 pb-6 last:pb-0"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-medium">{order.restaurant}</h4>
                  <p className="text-sm text-gray-600">
                    Order #{order.id} • {order.date}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {order.status}
                  </span>
                  <p className="font-medium mt-1">${order.total}</p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>
                      {item.quantity}x {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
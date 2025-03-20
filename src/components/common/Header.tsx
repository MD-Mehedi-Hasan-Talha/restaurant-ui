import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <ShoppingBag className="h-8 w-8 text-blue-600" />
            </Link>
            <div className="hidden md:block ml-4">
              <div className="flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/restaurants"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Restaurants
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Orders
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-1 rounded-full text-gray-500 hover:text-gray-700">
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-blue-600 rounded-full flex items-center justify-center text-xs text-white">
                2
              </span>
              <ShoppingBag className="h-6 w-6" />
            </Link>
            <Link
              to="/profile"
              className="flex items-center text-sm text-gray-700 hover:text-gray-900"
            >
              <User className="h-6 w-6" />
              <span className="ml-2 hidden md:inline">Account</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
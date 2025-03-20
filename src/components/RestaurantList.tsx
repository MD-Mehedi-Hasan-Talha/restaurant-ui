import { Clock, DollarSign, Search, Star } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, restaurants } from '../data';
import { Restaurant } from '../types';

export function RestaurantList({ onSelectRestaurant }: { onSelectRestaurant: (restaurant: Restaurant) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<'rating' | 'deliveryTime'>('rating');

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      (restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!selectedCategory || restaurant.cuisine.includes(selectedCategory))
  );

  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
  });

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Restaurants Near You</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search restaurants by name or location..."
              className="w-full p-3 pl-10 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          </div>
          <select
            className="p-3 border rounded-lg"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <select
            className="p-3 border rounded-lg"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'rating' | 'deliveryTime')}
          >
            <option value="rating">Sort by Rating</option>
            <option value="deliveryTime">Sort by Delivery Time</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedRestaurants.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.id}`}
            key={restaurant.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105"
            onClick={() => onSelectRestaurant(restaurant)}
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                <div className="flex items-center bg-green-100 px-2 py-1 rounded">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{restaurant.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-3">{restaurant.description}</p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  <span>Min. ${restaurant.minimumOrder}</span>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {restaurant.cuisine.map((type) => (
                  <span
                    key={type}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
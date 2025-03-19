export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'restaurant_owner';
  avatar?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  location: string;
  image: string;
  rating: number;
  deliveryTime: string;
  minimumOrder: number;
  ownerId: string;
  cuisine: string[];
  isOpen: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  isAvailable: boolean;
  allergens?: string[];
  spicyLevel?: 1 | 2 | 3;
  isVegetarian: boolean;
}

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  restaurantId: string;
  items: OrderItem[];
  status: 'Preparing' | 'Out for Delivery' | 'Delivered';
  customerName: string;
  address: string;
  total: number;
  createdAt: Date;
  estimatedDeliveryTime?: Date;
  paymentMethod: 'card' | 'cash';
  deliveryInstructions?: string;
  contactNumber: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}
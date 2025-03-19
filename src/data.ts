import { MenuItem, Restaurant, Category } from './types';

export const categories: Category[] = [
  { id: '1', name: 'Italian', description: 'Pizza, Pasta, and more' },
  { id: '2', name: 'Burgers', description: 'Gourmet burgers and sides' },
  { id: '3', name: 'Japanese', description: 'Sushi, Ramen, and more' },
  { id: '4', name: 'Indian', description: 'Curries, Biryani, and more' },
  { id: '5', name: 'Mexican', description: 'Tacos, Burritos, and more' },
];

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pasta Paradise',
    description: 'Authentic Italian cuisine in a cozy atmosphere',
    location: 'Downtown',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800',
    rating: 4.5,
    deliveryTime: '30-45 min',
    minimumOrder: 15,
    ownerId: 'owner1',
    cuisine: ['Italian', 'Pizza', 'Pasta'],
    isOpen: true,
  },
  {
    id: '2',
    name: 'Burger Bliss',
    description: 'Gourmet burgers and craft beers',
    location: 'Midtown',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800',
    rating: 4.2,
    deliveryTime: '20-35 min',
    minimumOrder: 12,
    ownerId: 'owner2',
    cuisine: ['American', 'Burgers'],
    isOpen: true,
  },
  {
    id: '3',
    name: 'Sushi Sensation',
    description: 'Fresh and creative Japanese cuisine',
    location: 'Uptown',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800',
    rating: 4.8,
    deliveryTime: '40-55 min',
    minimumOrder: 20,
    ownerId: 'owner3',
    cuisine: ['Japanese', 'Sushi', 'Asian'],
    isOpen: true,
  },
  {
    id: '4',
    name: 'Spice Route',
    description: 'Authentic Indian flavors and spices',
    location: 'Downtown',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800',
    rating: 4.6,
    deliveryTime: '35-50 min',
    minimumOrder: 18,
    ownerId: 'owner4',
    cuisine: ['Indian', 'Curry'],
    isOpen: true,
  },
  {
    id: '5',
    name: 'Taco Fiesta',
    description: 'Authentic Mexican street food',
    location: 'Westside',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800',
    rating: 4.4,
    deliveryTime: '25-40 min',
    minimumOrder: 15,
    ownerId: 'owner5',
    cuisine: ['Mexican', 'Tacos'],
    isOpen: true,
  },
];

export const menuItems: Record<string, MenuItem[]> = {
  '1': [
    {
      id: '1',
      name: 'Spaghetti Carbonara',
      description: 'Classic Roman pasta with eggs, pecorino cheese, and guanciale',
      price: 16.99,
      category: 'Pasta',
      isAvailable: true,
      isVegetarian: false,
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800',
    },
    {
      id: '2',
      name: 'Margherita Pizza',
      description: 'Fresh tomatoes, mozzarella, and basil on our signature crust',
      price: 14.99,
      category: 'Pizza',
      isAvailable: true,
      isVegetarian: true,
      image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800',
    },
    {
      id: '3',
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee-soaked ladyfingers',
      price: 8.99,
      category: 'Desserts',
      isAvailable: true,
      isVegetarian: true,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800',
    },
  ],
  '2': [
    {
      id: '1',
      name: 'Classic Cheeseburger',
      description: 'Angus beef with aged cheddar, lettuce, tomato, and special sauce',
      price: 12.99,
      category: 'Burgers',
      isAvailable: true,
      isVegetarian: false,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800',
    },
    {
      id: '2',
      name: 'Veggie Burger',
      description: 'House-made plant-based patty with avocado and chipotle mayo',
      price: 13.99,
      category: 'Burgers',
      isAvailable: true,
      isVegetarian: true,
      image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=800',
    },
    {
      id: '3',
      name: 'Truffle Fries',
      description: 'Crispy fries tossed with truffle oil and parmesan',
      price: 6.99,
      category: 'Sides',
      isAvailable: true,
      isVegetarian: true,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800',
    },
  ],
  '3': [
    {
      id: '1',
      name: 'California Roll',
      description: 'Crab, avocado, and cucumber roll with tobiko',
      price: 8.99,
      category: 'Sushi Rolls',
      isAvailable: true,
      isVegetarian: false,
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800',
    },
    {
      id: '2',
      name: 'Salmon Nigiri',
      description: 'Fresh salmon over seasoned rice',
      price: 6.99,
      category: 'Nigiri',
      isAvailable: true,
      isVegetarian: false,
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800',
    },
  ],
};
import React, { useState } from 'react';
import { Restaurant, OrderItem, Order } from './types';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { RestaurantList } from './components/RestaurantList';
import { Menu } from './components/Menu';
import { OrderConfirmation } from './components/OrderConfirmation';
import { OrderTracking } from './components/OrderTracking';

type AppState = {
  view: 'restaurants' | 'menu' | 'confirmation' | 'tracking';
  selectedRestaurant?: Restaurant;
  currentOrder?: Order;
  orderItems?: OrderItem[];
};

function App() {
  const [state, setState] = useState<AppState>({
    view: 'restaurants',
  });

  const handleSelectRestaurant = (restaurant: Restaurant) => {
    setState({
      view: 'menu',
      selectedRestaurant: restaurant,
    });
  };

  const handlePlaceOrder = (items: OrderItem[]) => {
    setState({
      ...state,
      view: 'confirmation',
      orderItems: items,
    });
  };

  const handleConfirmOrder = (customerName: string, address: string) => {
    const order: Order = {
      id: Math.random().toString(36).substr(2, 9),
      restaurantId: state.selectedRestaurant!.id,
      items: state.orderItems!,
      status: 'Preparing',
      customerName,
      address,
      total: state.orderItems!.reduce(
        (sum, item) => sum + item.menuItem.price * item.quantity,
        0
      ),
      createdAt: new Date(),
      paymentMethod: 'card',
      contactNumber: '',
    };

    setState({
      ...state,
      view: 'tracking',
      currentOrder: order,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        {state.view === 'restaurants' && (
          <RestaurantList onSelectRestaurant={handleSelectRestaurant} />
        )}
        {state.view === 'menu' && state.selectedRestaurant && (
          <Menu
            restaurant={state.selectedRestaurant}
            onPlaceOrder={handlePlaceOrder}
          />
        )}
        {state.view === 'confirmation' && state.orderItems && (
          <OrderConfirmation
            items={state.orderItems}
            onConfirm={handleConfirmOrder}
          />
        )}
        {state.view === 'tracking' && state.currentOrder && (
          <OrderTracking order={state.currentOrder} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
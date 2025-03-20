import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { RestaurantList } from './components/RestaurantList';
import { RestaurantDetails } from './components/restaurant/RestaurantDetails';
import { OrderConfirmation } from './components/OrderConfirmation';
import { OrderTracking } from './components/OrderTracking';
import { CartPage } from './components/cart/CartPage';
import { ProfilePage } from './components/profile/ProfilePage';
import { Hero } from './components/home/Hero';
import { FeaturedSection } from './components/home/FeaturedSection';
import { PopularCategories } from './components/home/PopularCategories';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { LoginPage } from './components/auth/LoginPage';
import { SignupPage } from './components/auth/SignupPage';

function HomePage() {
  return (
    <>
      <Hero />
      <PopularCategories />
      <FeaturedSection />
      <RestaurantList onSelectRestaurant={() => {}} />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/restaurants" element={<RestaurantList onSelectRestaurant={() => {}} />} />
              <Route path="/restaurants/:id" element={<RestaurantDetails />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/order-confirmation" element={<OrderConfirmation items={[]} onConfirm={() => {}} />} />
              <Route path="/order-tracking/:id" element={<OrderTracking order={null} />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
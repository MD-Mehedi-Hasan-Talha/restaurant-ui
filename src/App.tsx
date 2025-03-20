import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OrderConfirmation } from './components/OrderConfirmation';
import { OrderTracking } from './components/OrderTracking';
import { RestaurantList } from './components/RestaurantList';
import { LoginPage } from './components/auth/LoginPage';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { SignupPage } from './components/auth/SignupPage';
import { CartPage } from './components/cart/CartPage';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { OrderManagement } from './components/dashboard/OrderManagement';
import { RestaurantDashboard } from './components/dashboard/RestaurantDashboard';
import { FeaturedSection } from './components/home/FeaturedSection';
import { Hero } from './components/home/Hero';
import { PopularCategories } from './components/home/PopularCategories';
import { Layout } from './components/layout/Layout';
import { ProfilePage } from './components/profile/ProfilePage';
import { RestaurantDetails } from './components/restaurant/RestaurantDetails';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

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
          <Routes>
            {/* Main Application Routes */}
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/restaurants" element={<RestaurantList onSelectRestaurant={() => {}} />} />
              <Route path="/restaurants/:id" element={<RestaurantDetails />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/order-confirmation" element={<OrderConfirmation items={[]} onConfirm={() => {}} />} />
              <Route path="/order-tracking/:id" element={<OrderTracking order={null} />} />
            </Route>

            {/* Dashboard Routes with Different Layout */}
            <Route path="/restaurant/*" element={<PrivateRoute role="restaurant_owner">
              <DashboardLayout>
                <Routes>
                  <Route path="dashboard" element={<RestaurantDashboard />} />
                  {/* <Route path="menu" element={<MenuManagement />} /> */}
                  <Route path="orders" element={<OrderManagement />} />
                  {/* <Route path="settings" element={<RestaurantSettings />} /> */}
                </Routes>
              </DashboardLayout>
            </PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
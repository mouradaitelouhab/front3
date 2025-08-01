// Application principale ALMAS & DIMAS
// Site e-commerce de bijoux et diamants de luxe

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import SellerDashboard from './pages/dashboard/SellerDashboard';
import ProfilePage from './pages/ProfilePage';
import WishlistPage from './pages/WishlistPage';
import OrdersPage from './pages/OrdersPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-background flex flex-col">
            {/* En-tête de navigation */}
            <Header />
            
            {/* Contenu principal */}
            <main className="flex-1">
              <Routes>
                {/* Pages publiques */}
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                
                {/* Pages protégées (utilisateur connecté) */}
                <Route path="/checkout" element={
                  <ProtectedRoute>
                    <CheckoutPage />
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } />
                <Route path="/wishlist" element={
                  <ProtectedRoute>
                    <WishlistPage />
                  </ProtectedRoute>
                } />
                <Route path="/orders" element={
                  <ProtectedRoute>
                    <OrdersPage />
                  </ProtectedRoute>
                } />
                
                {/* Tableaux de bord */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/admin" element={
                  <ProtectedRoute requiredRole="Admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/seller" element={
                  <ProtectedRoute requiredRole={["Seller", "Admin"]}>
                    <SellerDashboard />
                  </ProtectedRoute>
                } />
                
                {/* Page 404 */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            
            {/* Pied de page */}
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;


import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardLayout from "./components/DashboardLayout";

// Import or create your other components
const Shop = () => <div>Shop Page</div>;
const Categories = () => <div>Categories Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Profile = lazy(() => import("./pages/Profile"));
const StoreCreationForm = lazy(() => import("./pages/StoreCreationForm"));
const DashboardHome = lazy(() => import("./components/DashboardHome"));
const OrderManagement = lazy(() => import("./components/OrderManagement"));
const ProductUpload = lazy(() => import("./components/ProductUpload"));
const Orders = lazy(() => import("./pages/Orders"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const StorePage = lazy(() => import("./pages/StorePage"));
const ProductLayout = lazy(() => import("./components/ProductLayout"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const CheckoutConfirmation = lazy(() => import("./pages/CheckoutConfirmation"));
const ProductDisplayPage = lazy(() => import("./pages/ProductDisplayPage"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/store" element={<StoreCreationForm />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/store/main" element={<StorePage />} />
          <Route path="/product/:productId" element={<ProductLayout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-confirm" element={<CheckoutConfirmation />} />
          <Route path="/products" element={<ProductDisplayPage />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="orders" element={<OrderManagement />} />
            <Route path="upload-product" element={<ProductUpload />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

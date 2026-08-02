import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { CartProvider } from "./Context/CartContext";

function Layout() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const removeFromCart = () => {
    setCartCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <CartProvider value={{ cartCount, addToCart, removeFromCart }}>
      <Header />
      <Outlet />
      <Footer />
    </CartProvider>
  );
}

export default Layout;
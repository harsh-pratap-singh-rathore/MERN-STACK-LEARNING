import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Routers/Header'
import Footer from './Routers/Footer'
import { Cartprovider } from './Context/CartContext'

function Layout() {
  const [cart, setCart] = useState([]);

  const addtocart = (item) => {
    setCart((prevCart) => [...prevCart, item || "Product"]);
  };

  const removefromcart = () => {
    setCart((prevCart) => (prevCart.length > 0 ? prevCart.slice(0, -1) : []));
  };

  return (
    <Cartprovider value={{ cart, addtocart, removefromcart }}>
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1 max-w-screen-xl w-full mx-auto p-4 pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Cartprovider>
  );
}

export default Layout;
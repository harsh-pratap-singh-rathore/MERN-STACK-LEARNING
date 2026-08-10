import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Routers/Header'
import Footer from './Routers/Footer'
import { Cartprovider } from './Context/CartContext'
import { nanoid } from 'nanoid'

function Layout() {
  const [cart, setCart] = useState([]);

  const addtocart = (product) => {
    const newItem = {
      id: nanoid(),
      title: product?.title || (typeof product === 'string' ? product : "Product"),
      imgsrc: product?.imgsrc || "",
      price: product?.price || "$29.99"
    };
    setCart((prevCart) => [...prevCart, newItem]);
  };

  const removefromcart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
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
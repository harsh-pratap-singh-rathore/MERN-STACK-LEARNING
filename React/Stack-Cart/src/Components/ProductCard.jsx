import React from 'react'
import useCart from '../Context/CartContext'
function ProductCard({ imgsrc }) {
    const {  addtocart, removefromcart} = useCart();
  return (
    <div className="bg-white block max-w-sm border border-gray-200 rounded-xl shadow-xs overflow-hidden">
      <a href="#">
        <img className="w-full h-48 object-cover" src={imgsrc} alt="Product" />
      </a>
      <div className="p-6 text-center">
        <span className="inline-flex items-center bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-md">
          <svg className="w-3 h-3 me-1" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
          </svg>
          Trending
        </span>
        <a href="#">
          <h5 className="mt-3 mb-4 text-xl font-bold tracking-tight text-gray-900">
            Streamlining your design process today.
          </h5>
        </a>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          <button 
            onClick={() => addtocart("New Product")}
            className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-3.5 py-2 transition-colors cursor-pointer"
          >
            Add to Cart
            <svg className="w-4 h-4 ms-1" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
            </svg>
          </button>
          <button 
            onClick={removefromcart}
            className="inline-flex items-center text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 font-medium rounded-lg text-sm px-3.5 py-2 transition-colors cursor-pointer"
          >
            Remove
            <svg className="w-4 h-4 ms-1" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
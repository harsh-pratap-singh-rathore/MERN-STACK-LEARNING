import {NavLink} from 'react-router-dom'
import useCart from '../Context/CartContext'


function Header() {
  const { cart } = useCart()
  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Stack-Cart Logo" />
          <span className="self-center text-xl font-bold whitespace-nowrap text-gray-900">Stack-Cart</span>
        </NavLink>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
        </button>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <NavLink
            to="/login"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </NavLink>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent items-center">
            <li>
              <NavLink to="/home" className={({ isActive }) => `block py-2 px-3 rounded md:p-0 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `block py-2 px-3 rounded md:p-0 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>About</NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => `block py-2 px-3 rounded md:p-0 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `block py-2 px-3 rounded md:p-0 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/products" className="block py-2 px-3 rounded md:p-0 text-gray-700 hover:text-blue-600 font-medium">Cart({cart ? cart.length : 0})</NavLink>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  )
}
export default Header
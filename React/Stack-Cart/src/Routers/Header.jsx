import {NavLink} from 'react-router-dom'
import useCart from '../Context/CartContext'


function Header() {
    const {cart} = useCart()
  return (
    <>
        <nav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/products" >Products</NavLink>
            <NavLink to="/contact" >Contact</NavLink>
        </nav>
        <div>Cart({cart ? cart.length : 0})</div>
        
    </>
  )
}
export default Header
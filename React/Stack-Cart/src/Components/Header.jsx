import { NavLink } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

function Header() {
  const { cartCount } = useCart()

  return (
    <div style={{backgroundColor:'cyan', color:'white', padding:'10px', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'20px'}}>
      <h1 style={{margin:'0', padding:'0'}}>Stack Cart</h1>
        <nav style={{display:'flex', gap:'20px'}}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="auth">
            <button>Login</button>
            <button>Register</button>
        </div>
        <div>
            <h5>Cart({cartCount})</h5>
        </div>
    </div>
  )
}

export default Header
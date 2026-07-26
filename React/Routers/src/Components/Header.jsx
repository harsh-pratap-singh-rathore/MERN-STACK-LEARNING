import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: '1rem', background: '#f4f4f4', borderBottom: '1px solid #ccc' }}>
      <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>MyApp</h2>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;

import { useCart } from "../Context/CartContext"

function Products() {
    const { cartCount, addToCart, removeFromCart } = useCart()

    return (
        <div style={{ padding: '20px' }}>
            <h1>This Is Products Page</h1>
            <p>Count: {cartCount}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={addToCart} style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add To Cart</button>
                <button onClick={removeFromCart} style={{ padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default Products

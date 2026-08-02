import useCart from '../Context/CartContext'

function Products() {
  const { cart, addtocart, removefromcart } = useCart();

  return (
    <>
      <h1>This is Products Page</h1>
      <p>Cart Items Count: {cart ? cart.length : 0}</p>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <button onClick={() => addtocart("New Product")}>Add To Cart</button>
        <button onClick={removefromcart}>Remove From Cart</button>
      </div>
    </>
  )
}

export default Products

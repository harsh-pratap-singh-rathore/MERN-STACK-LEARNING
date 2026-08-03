import ProductCard from '../Components/ProductCard';
import useCart from '../Context/CartContext'

function Products() {
  const { cart } = useCart();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">This is Products Page</h1>
      <p className="text-gray-700 font-medium">
        Cart Items Count: <span className="font-bold text-blue-600">{cart ? cart.length : 0}</span>
      </p>
      <div className="flex flex-wrap gap-6 pt-2">
        <ProductCard imgsrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" />
        <ProductCard imgsrc="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" />
      </div>
    </div>
  )
}

export default Products

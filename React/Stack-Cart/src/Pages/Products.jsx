import ProductCard from '../Components/ProductCard';
import useCart from '../Context/CartContext';

function Products() {
  const { cart, removefromcart } = useCart();

  const productsList = [
    {
      title: "Wireless Headphones",
      price: "$99.99",
      imgsrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
    },
    {
      title: "Smart Watch",
      price: "$149.99",
      imgsrc: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Products Catalog</h1>
        <p className="text-gray-600 mt-1">Select products to add to your cart.</p>
        <div className="flex flex-wrap gap-6 pt-4">
          {productsList.map((prod, index) => (
            <ProductCard 
              key={index}
              title={prod.title}
              price={prod.price}
              imgsrc={prod.imgsrc} 
            />
          ))}
        </div>
      </div>

      {/* Cart Items Section */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {cart ? cart.length : 0} {cart && cart.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {!cart || cart.length === 0 ? (
          <p className="text-gray-500 italic">Your cart is currently empty.</p>
        ) : (
          <div className="space-y-3 max-w-2xl">
            {cart.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-xs"
              >
                <div className="flex items-center space-x-4">
                  {item.imgsrc && (
                    <img src={item.imgsrc} alt={item.title} className="w-14 h-14 object-cover rounded-lg" />
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-blue-600 font-bold">{item.price}</span>
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded font-mono">
                        ID: {item.id}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removefromcart(item.id)}
                  className="inline-flex items-center text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 font-medium rounded-lg text-sm px-3 py-1.5 transition-colors cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;


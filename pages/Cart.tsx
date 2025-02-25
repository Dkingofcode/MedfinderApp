import { useState } from "react";

function CartPage() {
  const [cart, setCart] = useState([
    { id: 1, item: "Medicine A", price: 100, quantity: 1 },
    { id: 2, item: "Medicine B", price: 150, quantity: 2 },
  ]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      <ul className="mt-4 space-y-4">
        {cart.map((item) => (
          <li key={item.id} className="p-4 border rounded-lg bg-white">
            <p>{item.item}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className="font-bold">Total: ${calculateTotal()}</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;

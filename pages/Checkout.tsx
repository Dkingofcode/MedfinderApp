import React from "react";
//import { useNavigate } from "react-router-dom"; // For navigation
import { PaystackButton } from "react-paystack"; // If using Paystack
import { useRouter } from "next/router";

const CheckoutPage = ({ cart }) => {
//  const navigate = useNavigate();
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const router = useRouter();


  const config = {
    reference: (new Date()).getTime(),
    email: "customer@example.com", // Replace with customer's email
    amount: totalAmount * 100, // Amount in kobo
    publicKey: "your-public-key-here", // Paystack public key
  };

  const handleSuccess = (response) => {
    // Handle success (e.g., show success message, update order status, etc.)
    alert("Payment successful!");
    router.push("/order-confirmation");
  };

  const handleClose = () => {
    alert("Payment window closed");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold">Checkout</h2>
      <p className="mt-4">Total: ${totalAmount}</p>

      <div className="mt-4">
        <PaystackButton
          text="Pay Now"
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
          config={config}
          onSuccess={handleSuccess}
          onClose={handleClose}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;

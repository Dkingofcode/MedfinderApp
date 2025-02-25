import React from "react";

function OrderConfirmationPage() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold">Order Confirmation</h2>
      <p className="mt-4">Thank you for your order! Your payment was successful.</p>
      <p>Order ID: 12345</p>
      <p>Status: Processing</p>
    </div>
  );
}

export default OrderConfirmationPage;

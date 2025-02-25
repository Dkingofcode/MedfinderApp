import React, { useEffect } from 'react'
import io from "socket.io-client";
import { useState } from "react";


type Props = {};

const socket = io("http://localhost:4000");

function OrderDetails({}: Props) {
    const [orders, setOrders] = useState([]);


    useEffect(() => {
      socket.on("orderUpdate", (updatedOrders) => {
        setOrders(updatedOrders);
      });
      return () => socket.off("orderUpdate");
    }, []);
  
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">Order Details</h2>
        <ul className="mt-4 space-y-4">
          {orders.map((order) => (
            <li key={order.id} className="p-4 border rounded-lg bg-white">
              <p>{order.item} - <span className="font-semibold">{order.status}</span></p>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default OrderDetails;
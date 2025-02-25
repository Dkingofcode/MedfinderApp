import { useEffect, useState } from "react";

const StockAvailability = ({ medicationId }: { medicationId: string }) => {
  const [stock, setStock] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/stock?medicationId=${medicationId}`)
      .then((res) => res.json())
      .then((data) => setStock(data.stock))
      .catch(() => setStock(null));
  }, [medicationId]);

  return <p>Stock: {stock !== null ? stock : "Checking..."}</p>;
};

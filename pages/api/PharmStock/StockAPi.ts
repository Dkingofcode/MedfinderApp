import { NextApiRequest, NextApiResponse } from "next";
import { fetchStockData } from "@/utils/pharmacyAPI"; // Mock function to fetch stock info

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    const { medicationId } = req.query;
    const stockData = await fetchStockData(medicationId as string);
    res.json(stockData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching stock data" });
  }
}

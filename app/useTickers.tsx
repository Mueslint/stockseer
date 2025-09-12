"use client";

import { useState, useEffect } from "react";

export const useTickers = () => {
  const [tickers, setTickers] = useState<string[]>([]);

  useEffect(() => {
    const savedTickers = localStorage.getItem("stockseer-tickers");
    if (savedTickers) {
      try {
        setTickers(JSON.parse(savedTickers));
      } catch (error) {
        console.error("Error parsing saved tickers:", error);
      }
    }
  }, []);

  // Save tickers to localStorage whenever tickers change
  useEffect(() => {
    const hasExistingData = localStorage.getItem("stockseer-tickers") !== null;
    if (tickers.length > 0 || !hasExistingData) {
      localStorage.setItem("stockseer-tickers", JSON.stringify(tickers));
    }
  }, [tickers]);

  const addNewTicker = (formData: FormData) => {
    const newTicker = formData.get("ticker")?.toString().toUpperCase();
    if (!newTicker) return;
    if (tickers.length >= 3) return;
    if (tickers.includes(newTicker)) return;

    setTickers((prev) => [...prev, newTicker]);
  };

  const deleteTicker = (ticker: string) =>
    setTickers((prev) => prev.filter((t) => t !== ticker));

  return { tickers, addNewTicker, deleteTicker };
};

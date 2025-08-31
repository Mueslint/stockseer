import { dates } from "./dates";

export const fetchStockData = async (tickers: string[]) => {
  const stockData = await Promise.all(
    tickers.map(async (ticker) => {
      const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${process.env.POLYGON_API_KEY}`;
      const response = await fetch(url);
      const data = await response.text();
      return data;
    })
  );
  return stockData;
};

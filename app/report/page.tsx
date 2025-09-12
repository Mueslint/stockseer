import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fetchStockData } from "../utils/fetch-stock";
import { fetchReport } from "../utils/stock-report";

interface ReportPageProps {
  searchParams: Promise<{ tickers: string }>;
}

const ReportPage = async ({ searchParams }: ReportPageProps) => {
  const { tickers } = await searchParams;

  const formattedTickers = tickers
    ? tickers.split(",").map((t) => t.toUpperCase())
    : [];

  try {
    const stockData = await fetchStockData(formattedTickers);
    const stockReport = await fetchReport(stockData);

    return (
      <section className="flex flex-col gap-[16px] items-center text-gray-700">
        <h1 className="font-bold text-xl text-gray-500">
          Report for {formattedTickers.join(", ")}
        </h1>
        <div className="flex flex-col gap-[8px] max-w-lg mb-[8px] p-[16px] border border-gray-300 bg-gray-200 rounded">
          {stockReport?.content?.split("\n\n").map((stockReport) => {
            return <span key={stockReport.slice(0, 10)}>{stockReport}</span>;
          })}
        </div>
        <nav>
          <Button>
            <Link href="/">Go back</Link>
          </Button>
        </nav>
      </section>
    );
  } catch (error) {
    console.error("Error fetching stock data:", error);

    return (
      <section className="flex flex-col gap-[16px] items-center">
        <h1>Report for {formattedTickers.join(", ")}</h1>
        <span className="font-bold text-red-500">
          {" "}
          There was an error fetching the report.{" "}
        </span>
        <nav>
          <Button>
            <Link href="/">Go back</Link>
          </Button>
        </nav>
      </section>
    );
  }
};

export default ReportPage;

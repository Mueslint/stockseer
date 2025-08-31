import { Badge } from "@/components/ui/badge";

export const TickersList = ({
  tickers,
  deleteTicker,
}: {
  tickers: string[];
  deleteTicker: (ticker: string) => void;
}) => {
  return (
    <div className="flex gap-[8px] flex-wrap justify-center">
      {tickers.map((ticker) => (
        <Badge key={ticker} onClick={() => deleteTicker(ticker)}>
          {ticker}
        </Badge>
      ))}
    </div>
  );
};

"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { TickersForm } from "./TickersForm";
import { TickersList } from "./TickersList";
import { useTickers } from "../useTickers";

export const TickersSection = () => {
  const { tickers, addNewTicker, deleteTicker } = useTickers();

  return (
    <section className="flex flex-col gap-[16px] items-center">
      <TickersForm addNewTicker={addNewTicker} />
      <TickersList deleteTicker={deleteTicker} tickers={tickers} />
      <div className="flex flex-col gap-[8px] mt-[8px] justify-items-center items-center">
        <nav>
          <Button disabled={tickers.length === 0}>
            <Link href={`/report?tickers=${tickers.join(",")}`}>
              Generate Report
            </Link>
          </Button>
        </nav>
        <p className="text-xs">Always correct 15% of the time!</p>
      </div>
    </section>
  );
};

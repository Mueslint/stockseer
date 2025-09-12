import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const TickersForm = ({
  addNewTicker,
}: {
  addNewTicker: (formData: FormData) => void;
}) => {
  return (
    <section className="flex flex-col gap-[16px] items-center">
      <form action={addNewTicker}>
        <div>
          <Label htmlFor="ticker-input">
            Add up to 3 stock tickers below to ask the spirits for advice!
          </Label>
          <div className="flex gap-[8px] mt-[8px]">
            <Input type="text" name="ticker" placeholder="MSFT" />
            <Button type="submit">Add</Button>
          </div>
        </div>
      </form>
    </section>
  );
};

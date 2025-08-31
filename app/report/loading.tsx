import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Loading = () => {
  return (
    <section className="flex flex-col gap-[16px] items-center">
      <h1> ✨ Consulting the stars... ✨ </h1>

      <Image src="/loader.svg" alt="Loading..." width={100} height={100} />
      <nav>
        <Button>
          <Link href="/">Go back</Link>
        </Button>
      </nav>
    </section>
  );
};

export default Loading;

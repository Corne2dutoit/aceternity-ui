import Image from "next/image";
import { ThreeDCardDemo } from "../components/3dCard";
import { BentoGrid } from "@/components/ui/bento-grid";
import { BentoGridDemo } from "../components/BentoGrid";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-36 ">
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Hello
        </div>

        <div className="">
          <ThreeDCardDemo />
        </div>

        
      </main> */}

      <BentoGridDemo />
      <div className="max-w-4xl mx-auto pt-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3">
          <div className=" col-span-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
            Hello
          </div>
          <div className=" col-span-2 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
            Hello
          </div>
        </div>
      </div>
    </div>
  );
}

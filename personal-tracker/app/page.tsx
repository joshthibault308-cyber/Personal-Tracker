import Image from "next/image";
import Entry from "./NewEntries";
import { jetBrains_Mono, aBeeZee, zilla_Slab } from '@/app/layout'

export default function Home() {
  return (

    <div className="flex h-screen flex-col min-h-0">

      <Image
        src="/Wood Background.jpg" alt="Background Image" fill className="object-cover -z-10"
      />

      <div className="bg-[#FFEFD4]">
        <div className={`${jetBrains_Mono.className} flex ml-[20%] mr-[5%] h-16 gap-14 text-[15px] items-center justify-between font-medium`}>
          <a
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#F8CF89] px-2 text-[#000000] transition-colors hover:bg-[#fad79b] md:w-[158px]"
            href="/create"
          >
            Create Entry
          </a>
          <div className="flex gap-5 items-center">
            <Image src="/Arrow.png" alt="Arrow" width={32} height={32} className="rotate-180" />
            <div className="flex text-[#000000]">
              1/2
            </div>
            <Image src="/Arrow.png" alt="Arrow" width={32} height={32} />
          </div>
          <a
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#F8CF89] px-2 text-[#000000] transition-colors hover:bg-[#fad79b] md:w-[158px]"
            href="/"
          >
            Logout
          </a>
        </div>
      </div>

      <div className="flex flex-1 ml-[1%] min-h-0 gap-4">

        <div className="flex flex-col w-[62%] h-full gap-10">

          <main className="flex flex-col h-full">

            <div className="flex flex-col items-center gap-6 text-center text-8xl text-[#000000]">
              March 5th
            </div>

            <div className="grid min-h-0 gap-5">
              <div className={`${jetBrains_Mono.className} grid h-[5%] grid-flow-col auto-cols-fr gap-4 text-[1cqw]`}>
                <div
                  className="flex items-center justify-center text-center rounded-full bg-[#F8CF89] text-[#000000]">
                  Time
                </div>

                <div
                  className="flex items-center justify-center text-center rounded-full bg-[#F8CF89] text-[#000000]">
                  End Time
                </div>

                <div
                  className="flex items-center justify-center text-center rounded-full bg-[#F8CF89] text-[#000000]">
                  Duration
                </div>

                <div
                  className="flex items-center justify-center text-center rounded-full bg-[#F8CF89] text-[#000000]">
                  Exercise Type
                </div>

                <div
                  className="flex items-center justify-center text-center rounded-full bg-[#F8CF89] text-[#000000]">
                  Intensity
                </div>

                <div
                  className="flex items-center justify-center text-center rounded-full bg-[#F8CF89] text-[#000000]">
                  Soreness
                </div>

                <div
                  className="flex items-center justify-center text-center rounded-full bg-[#F8CF89] text-[#000000]">
                  Extra Notes
                </div>

                <div></div>

              </div>

              <div className="grid gap-5 overflow-y-auto">

                <Entry Text1="8:30PM" Text2="9:30PM" Text3="60 minutes" Text4="Rock Climbing" Text5="Medium" Text6="5/10" Text7="N/A" />





              </div>

            </div>

          </main>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <Image
            src="/Quote.jpg" alt="Background Image" width={400} height={200} className="object-cover"
          />
        </div>

      </div>
    </div>
  );
}
import Image from "next/image";
import Entry from "../NewEntries";
import { jetBrains_Mono } from '@/app/layout'

export default async function Home({ params, }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (

    <div className="flex relative h-screen flex-col min-h-0">

      <Image
        src="/Wood Background.jpg" alt="Background Image" fill className="object-cover -z-10"
      />

      <div className="bg-[#FFEFD4]">
        <div className={`${jetBrains_Mono.className} flex ml-[20%] mr-[5%] h-[10vw] md:h-16 gap-[5%] text-[2vw] items-center justify-between font-medium`}>
          <a
            className="flex whitespace-nowrap h-[7vw] md:h-11 items-center justify-center rounded-full bg-[#F8CF89] px-[5px] text-[#000000] transition-colors hover:bg-[#fad79b]"
            href="/create"
          >
            Create Entry
          </a>
          <div className="flex gap-[10%] items-center">
            <a href={(+slug - 1 !== 0) ? `/${(+slug - 1)}` : ``}>
              <Image src="/Arrow.png" alt="Arrow" width={32} height={32} className="rotate-180 h-auto w-full" />
            </a>
            <div className="flex text-[#000000]">
              {slug}/3
            </div>
            <a href={(+slug + 1 !== 4) ? `/${(+slug + 1)}` : ``}>
              <Image src="/Arrow.png" alt="Arrow" width={32} height={32} className="h-auto w-full" />
            </a>
          </div>
          <a
            className="flex whitespace-nowrap h-[7vw] md:h-11 items-center justify-center gap-[2%] rounded-full bg-[#F8CF89] px-2 text-[#000000] transition-colors hover:bg-[#fad79b]"
            href="/login"
          >
            Logout
          </a>
        </div>
      </div>

      <div className="grid sm:flex flex-1 ml-[1%] min-h-0">

        <div className="flex flex-col h-60 sm:w-[62%] sm:h-full gap-10 min-h-0">

          <main className="flex flex-col min-h-0">

            <div className="flex flex-col text-center text-[5vw] text-[#000000]">
              March 5th
            </div>

            <div className="grid min-h-0 gap-5">
              <div className={`${jetBrains_Mono.className} grid h-[5%] grid-flow-col auto-cols-fr gap-4 text-[1.5cqw] sm:text-[1cqw]`}>
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

              <div className="grid gap-5 overflow-y-auto min-h-0">


              </div>

            </div>

          </main>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <Image
            src="/Quote.jpg" alt="Background Image" width={100} height={50} className="relative object-contain w-auto h-auto sm:w-full sm:h-full"
          />
        </div>

      </div>
    </div>
  );
}
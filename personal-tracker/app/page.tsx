'use client'

import Image from "next/image";
import Entry from "./NewEntries";
import { jetBrains_Mono } from '@/app/layout'
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import { Suspense } from "react";

export default function Home() {
  const pageNumber = 3;
  const [deleteisOpen, setDeleteisOpen] = useState(false);

  const handleDeleteButton = () => {
    setDeleteisOpen(true);
  }

  return (

    <div>
      {deleteisOpen &&
          (<div className="absolute grid items-center justify-center m-auto inset-0 w-[60vw] h-[50vw] rounded-[50] bg-[#fad79b] z-1">
          <div className="">Are you sure you want to delete this item?</div>
          <div className="flex flex-1 gap-10">
          <button className="flex-1 rounded-[50] bg-[#fae5c0]" onClick={() => setDeleteisOpen(false)}>
            Yes
          </button>
          <button className="flex-1 rounded-[50] bg-[#fae5c0]" onClick={() => setDeleteisOpen(false)}>
            No
          </button>
          </div>
          </div>)}

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
              <a href="/">
                <Image src="/Arrow.png" alt="Arrow" width={32} height={32} className="rotate-180 h-auto w-full" />
              </a>
              <div className="flex text-[#000000]">
                1/{pageNumber}
              </div>
              <a href="/2">
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

                  <Entry Text1="3:08" Text2="3:08" Text3="30 minutes" Text4="Running" Text5="Low" Text6="Low" Text7="N/A" keyNumber="N/A" deleteFunction={handleDeleteButton} />
                  <Entry Text1="03:09" Text2="3:08" Text3="30 minutes" Text4="Running" Text5="Low" Text6="Low" Text7="N/A" keyNumber="N/A" deleteFunction={handleDeleteButton} />
                  <Entry Text1="03:010" Text2="3:08" Text3="30 minutes" Text4="Running" Text5="Low" Text6="Low" Text7="N/A" keyNumber="N/A" deleteFunction={handleDeleteButton} />


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
    </div>
  );
}
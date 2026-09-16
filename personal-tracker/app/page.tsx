'use client'

import Image from "next/image";
import Entry from "./NewEntries";
import { jetBrains_Mono, aBeeZee, zilla_Slab } from '@/app/layout'
import Form from "next/form";
import Link from "next/link";
import {useState} from "react";
import { redirect } from "next/navigation";

export async function createEntry(formData: FormData) {

    const date = formData.get('date')?.toString() || ' '
    const time = formData.get('time')?.toString() || ' '
    const duration = formData.get('duration')
    const type = formData.get('type')
    const intensity = formData.get('intensity')
    const soreness = formData.get('soreness')
    const notes = formData.get('notes')

    //handleCreateEntry(formData, setStatus);
    //setStatus(prevEntries => [...prevEntries, `Date: ${date}, Time: ${time}, Duration: ${duration}, Type: ${type}, Intensity: ${intensity}, Soreness: ${soreness}, Notes: ${notes}`]);

    console.log('Submitted date:', date)
    console.log('Submitted time:', time)

    redirect('/?{date}');

  }

export default function Home() {

  const [entries, setEntries] = useState<string[]>([]);
  const formData = new FormData();

  return (
    <div className="flex h-screen flex-col min-h-0">

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
            <Image src="/Arrow.png" alt="Arrow" width={32} height={32} className="rotate-180 h-auto w-full" />
            <div className="flex text-[#000000]">
              1/2
            </div>
            <Image src="/Arrow.png" alt="Arrow" width={32} height={32} className="h-auto w-full" />
          </div>
          <a
            className="flex whitespace-nowrap h-[7vw] md:h-11 items-center justify-center gap-[2%] rounded-full bg-[#F8CF89] px-2 text-[#000000] transition-colors hover:bg-[#fad79b]"
            href="/login"
          >
            Logout
          </a>
        </div>
      </div>

      <div className="flex flex-1 ml-[1%] min-h-0 gap-4">

        <div className="flex flex-col w-[62%] h-full gap-10">

          <main className="flex flex-col h-full">

            <div className="flex flex-col text-center text-[5vw] text-[#000000]">
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

                {entries.map((entry, index) => (
                  <Entry Text1={entry} Text2={"hi"} Text3={"hi2"} Text4={"hi5"} Text5={"hi6"} Text6={"hi7"} Text7={"hi8"} />
                ))}





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
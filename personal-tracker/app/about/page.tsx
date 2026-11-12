"use client";
import Image from "next/image";
import { jetBrains_Mono, aBeeZee, zilla_Slab } from '@/app/layout';

export default function About() {
    return (
        <div className="flex relative h-screen flex-col min-h-0">

            <Image
                src="/Wood Background.jpg" alt="Background Image" fill className="object-cover -z-10"
            />

            <div className="flex h-[10vw] md:h-16 items-center gap-[5%] bg-[#FFEFD4]">
                <div className={`${jetBrains_Mono.className} flex items-center text-[3vw] md:text-[24px] ml-[1%] text-[#000000] font-medium`}>
                    About
                </div>
                <div className={`${jetBrains_Mono.className} flex ml-[10%] mr-[2.5%] h-[10vw] md:h-16 gap-[5%] text-[2vw] items-center justify-between font-medium`}>
                <a
                    className="flex whitespace-nowrap h-[7vw] md:h-11 items-center justify-center rounded-full bg-[#F8CF89] px-[5px] text-[#000000] transition-colors hover:bg-[#fad79b]"
                    href="/"
                >
                    Back
                </a>
                </div>
            </div>

            <div className="grid flex-1 justify-center items-center justify-between ml-[10%] mr-[10%] mt-[10%] mb-[10%]">
                This application helps users track the exercises they have done. The user can create new entries once they have logged in and each entry will display on the day that corresponds with the day the user performed the exercise.
            </div>
        </div>

    )
}
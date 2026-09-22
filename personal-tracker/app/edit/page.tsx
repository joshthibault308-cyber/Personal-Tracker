import Image from "next/image";
import { jetBrains_Mono, aBeeZee, zilla_Slab } from '@/app/layout'

export default function Edit() {
    return (
        <div className="flex relative h-screen flex-col min-h-0">

            <Image
                src="/Wood Background.jpg" alt="Background Image" fill className="object-cover -z-10"
            />

            <div className="flex h-[10vw] md:h-16 bg-[#FFEFD4]">
                <div className={`${jetBrains_Mono.className} flex items-center text-[3vw] md:text-[24px] ml-[1%] text-[#000000] font-medium`}>
                    Edit
                </div>
            </div>

            <div className="grid flex-1 justify-center items-center gap-10 ml-[10%] mr-[10%] mt-[10%] mb-[10%]">

                <div className="grid flex-1 gap-3">
                    <div className={`${aBeeZee.className} grid justify-center text-[2.5vw] md:text-[1.5rem] text-[#000000] gap-1`}>
                        <div>
                            Date (MM/DD/YYYY)
                        </div>
                        <div className="flex bg-[#FFFFFF]">
                            <input type="text" id="date" />
                        </div>

                        <div>
                            Start time (HH:MM)
                        </div>
                        <div className="flex bg-[#FFFFFF]">
                            <input type="text" id="time" />
                        </div>

                        <div>
                            Duration
                        </div>
                        <div className="flex bg-[#FFFFFF]">
                            <input type="text" id="duration" />
                        </div>

                        <div>
                            Exercise Type
                        </div>
                        <div className="flex bg-[#FFFFFF]">
                            <input type="text" id="type" />
                        </div>

                        <div>
                            Intensity
                        </div>
                        <div className="flex bg-[#FFFFFF]">
                            <input type="text" id="intensity" />
                        </div>

                        <div>
                            Soreness
                        </div>
                        <div className="flex bg-[#FFFFFF]">
                            <input type="text" id="soreness" />
                        </div>

                        <div>
                            Extra Notes
                        </div>
                        <div className="flex bg-[#FFFFFF]">
                            <input type="text" id="notes" />
                        </div>
                    </div>

                    <div className={`${jetBrains_Mono.className} flex justify-center text-[2vw] text-[#000000]`}>
                        <a className="justify-center rounded-full bg-[#FFCD75]">
                            Confirm
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}
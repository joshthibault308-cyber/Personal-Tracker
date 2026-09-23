import Image from "next/image";
import { jetBrains_Mono, aBeeZee, zilla_Slab } from '@/app/layout'

export default function Login() {
    return (
        <div className="flex h-screen justify-center flex-col ml-[10%] mr-[10%] min-h-0">

            <Image
                src="/Wood Background.jpg" alt="Background Image" fill className="object-cover -z-10"
            />

        <div className="grid items-center gap-10 mt-[10%] mb-[10%]">
            <div className="grid flex-1 gap-2 text-[#000000] text-5xl sm:text-6xl md:text-7xl">
                <div className={`${jetBrains_Mono.className} grow flex-1 text-center font-bold`}>
                    Welcome to
                </div>
                <div className={`${zilla_Slab.className} text-center font-bold`}>
                    Exercise Tracker
                </div>
            </div>

        <div className="grid flex-1 gap-3">
            <div className={`${aBeeZee.className} grid justify-center text-[3vw] text-[#000000]`}>
                <div>
                    Username
                </div>
                <div className="flex bg-[#FFFFFF]">
                    <input type="text" id="username"/>
                </div>
                <div>
                    Password
                </div>
                <div className="flex bg-[#FFFFFF]">
                    <input type="password" id="password"/>
                </div>
            </div>

            <div className={`${jetBrains_Mono.className} flex justify-center text-[2vw] text-[#000000]`}>
                <a className="flex w-1/8  justify-center rounded-full bg-[#FFCD75]"
                href="/">
                Login
                </a>
            </div>
            </div>

            </div>

        </div>
    )
}
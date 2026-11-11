import Image from "next/image";
import Entry from "../NewEntries";
import EntryList from "../EntryList";
import { jetBrains_Mono } from '@/app/layout'
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { supabaseComponent } from "@/app/utils/supabase";
import { createClient } from "@/app/utils/supabase/server";
import { refresh, revalidatePath, updateTag } from 'next/cache';

export const dynamic = 'force-dynamic';

export default async function Home({ params, }: { params: Promise<{ slug: string }> }) {

  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect('/login')
  }

  const { slug } = await params
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + +slug - 1);
  const currentDateFormatted = currentDate.toLocaleDateString('sv-SE');
  const pageDate = new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric" }).format(currentDate);

  const deleteButton = async (deleteID: any) => {
    "use server";

    const { data: newEntry, error } = await supabaseComponent
      .from('entries')
      .delete()
      .eq("id", deleteID);
    revalidatePath(`${slug}`, 'page');
  }

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
            <a href={`/${(+slug - 1)}`}>
              <Image src="/Arrow.png" alt="Arrow" width={32} height={32} className="rotate-180 h-auto w-full" />
            </a>
            <div className="flex text-[#000000]">
              {slug}/3
            </div>
            <a href={`/${(+slug + 1)}`}>
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
              {pageDate}
              {/* March {(() => {
                switch (+slug + 4) {
                  case (1): return "1st";
                  case (2): return "2nd";
                  case (3): return "3rd";
                  case (21): return "21st";
                  case (22): return "22nd";
                  case (23): return "23rd";
                  case (31): return "31st";
                  default: return (+slug + 4) +"th";
                }
              })()} */}
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

                <Suspense>
                  <EntryList user={user.email?.toString() ?? ""} date={(currentDateFormatted)} deleteFunction={deleteButton} />
                </Suspense>

              </div>

            </div>

          </main>
        </div>

        <div className="flex flex-1 items-center justify-center sm:mt-10 sm:mb-10 sm:ml-10 sm:mr-10">
          <Image
            src="/Quote 3.jpg" alt="Background Image" width={200} height={100} className="relative object-contain w-[400px] h-[200px] sm:w-full sm:h-full"
          />
        </div>

      </div>
    </div>
  );
}
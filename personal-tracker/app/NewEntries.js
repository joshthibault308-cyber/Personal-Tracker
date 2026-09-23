import Image from "next/image";
import EntryBlock from "./EntryBlock";
import { jetBrains_Mono, aBeeZee, zilla_Slab } from '@/app/layout'
export default function Entry({ Text1, Text2, Text3, Text4, Text5, Text6, Text7, keyNumber, deleteFunction }) {
  if (Text1) {
  const date = new Date("2026-01-01T" + Text2 + ":00Z");
  const milDate = (date.setMinutes(date.getMinutes()) + (Text3.replace(/\D/g,"") * 60 * 1000)).toString();
  const hours = Math.floor((milDate / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((milDate / (1000 * 60)) % 60);

  return (
    <div className={`${jetBrains_Mono.className} grid grid-flow-col auto-cols-fr gap-4 [container-type:inline-size]`}>

      <EntryBlock Text={Text1} />
      <EntryBlock Text={hours + ":" + minutes} />
      <EntryBlock Text={Text3} />
      <EntryBlock Text={Text4} />
      <EntryBlock Text={Text5} />
      <EntryBlock Text={Text6} />
      <EntryBlock Text={Text7} />

      <div className="grid gap-[10%]">
        <a className="w-1/2 aspect-square rounded-full bg-[#FFDF9B]"
          href={"/edit?" + keyNumber}>
          <Image
            src="/Pencil Icon.png" alt="Pencil" width={400} height={200} className="object-cover rotate-180"
          />
        </a>

        <div className="flex justify-center w-1/2 aspect-square rounded-full bg-[#FF9B9B]">
          <button className="flex justify-center" onClick={deleteFunction}>
          <Image
            src="/Minus Symbol.png" alt="Minus" width={400} height={200} className="w-2/3"
          />
          </button>
        </div>
      </div>

    </div>
  )
}
}
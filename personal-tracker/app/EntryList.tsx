import Entry from "./NewEntries";
import { useSearchParams } from "next/navigation"
import { useEffect, Dispatch, SetStateAction } from "react";

interface EntryItem {
        Text1: string | null;
        Text2: string | null;
        Text3: string | null;
        Text4: string | null;
        Text5: string | null;
        Text6: string | null;
        keyNumber: string | null;
    }

interface EntryProps {
    entries: EntryItem[];
    setEntries: Dispatch<SetStateAction<EntryItem[]>>;
    handledeleteButton: (key: any) => void;
}

export default function EntryList({entries, setEntries, handledeleteButton}: EntryProps) {
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.get("date")) {
          setEntries((previousEntries) => {
          if (previousEntries.some((item) => item.keyNumber === searchParams.get("date"))) {
            return previousEntries;
          }
          return [
        ...previousEntries, {Text1: searchParams.get("time"), Text2: searchParams.get("duration"), Text3: searchParams.get("type"), Text4: searchParams.get("intensity"), Text5: searchParams.get("soreness"), Text6: searchParams.get("notes"), keyNumber: searchParams.get("date")}
        ]});}}, [searchParams]);


    return (
        <>
            {
                entries.map((entry, index) => (
                    <Entry key={entry.keyNumber} Text1={entry.Text1} Text2={entry.Text2} Text3={entry.Text3} Text4={entry.Text4} Text5={entry.Text5} Text6={entry.Text6} rowNumber={index} keyNumber={entry.keyNumber} deleteFunction={handledeleteButton} />
                ))
            }
        </>
    )
}
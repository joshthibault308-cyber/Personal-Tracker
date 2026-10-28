"use client"

import Entry from "./NewEntries";
import { useSearchParams } from "next/navigation"
import { useEffect, Dispatch, SetStateAction } from "react";
import { createClient } from "@/app/utils/supabase/client";
import { Suspense, useState } from "react";

interface EntryItem {
    Text1: string | null;
    Text2: string | null;
    Text3: string | null;
    Text4: string | null;
    Text5: string | null;
    Text6: string | null;
    keyNumber: string | null;
}

// interface EntryProps {
//     entries: EntryItem[];
//     setEntries: Dispatch<SetStateAction<EntryItem[]>>;
//     handledeleteButton: (key: any) => void;
// }

export default function EntryList({user}: {user: string}) {
    const searchParams = useSearchParams();

    const [entries, setEntries] = useState<EntryItem[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchEntries() {
            try {

                const supabase = createClient();
                const { data, error } = await supabase.from('entries').select('*');

                if (error) {
                    setError(error.message);
                } else {
                    setEntries(data);
                     const formattedEntries = data.map((entry) => ({
                        Text1: entry.time,
                        Text2: entry.duration,
                        Text3: entry.type,
                        Text4: entry.intensity,
                        Text5: entry.soreness,
                        Text6: entry.notes,
                        keyNumber: entry.id,
                        user: entry.user
                    }));
                    //const filteredData = data[0];
                    const filteredEntries = formattedEntries.filter((entry) => entry.user === user);
                    setEntries(filteredEntries);
                }
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }

        }
        fetchEntries();
    }, []);
    return (
        <>
        {entries.map((entry, index) => (
            <Entry key={entry.keyNumber} Text1={entry.Text1} Text2={entry.Text2} Text3={entry.Text3} Text4={entry.Text4} Text5={entry.Text5} Text6={entry.Text6} rowNumber={index} keyNumber={entry.keyNumber} />
        ))}
    </>
    )
}

// export default function Entries() {
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <EntryList />
//         </Suspense>
//         // EntryList.map((entry, index) => (
//         //             <Entry key={entry.keyNumber} Text1={entry.Text1} Text2={entry.Text2} Text3={entry.Text3} Text4={entry.Text4} Text5={entry.Text5} Text6={entry.Text6} rowNumber={index} keyNumber={entry.keyNumber} deleteFunction={handledeleteButton} />
//         //         ))
//     );
// }

//     const searchParams = useSearchParams();

//     useEffect(() => {
//         if (searchParams.get("date")) {
//           setEntries((previousEntries) => {
//           if (previousEntries.some((item) => item.keyNumber === searchParams.get("date"))) {
//             return previousEntries;
//           }
//           return [
//         ...previousEntries, {Text1: searchParams.get("time"), Text2: searchParams.get("duration"), Text3: searchParams.get("type"), Text4: searchParams.get("intensity"), Text5: searchParams.get("soreness"), Text6: searchParams.get("notes"), keyNumber: searchParams.get("date")}
//         ]});}}, [searchParams]);




//     return (
//         <>
//             {/* {
//                 entries.map((entry, index) => (
//                     <Entry key={entry.keyNumber} Text1={entry.Text1} Text2={entry.Text2} Text3={entry.Text3} Text4={entry.Text4} Text5={entry.Text5} Text6={entry.Text6} rowNumber={index} keyNumber={entry.keyNumber} deleteFunction={handledeleteButton} />
//                 ))
//             } */}
//         </>
//     )
// }
"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { jetBrains_Mono, aBeeZee, zilla_Slab } from '@/app/layout'
import Form from "next/form";
import { supabaseComponent } from "@/app/utils/supabase";
import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/supabase/server";

export default async function SearchParams({ user, form }: { user: string, form: any }) {

    const supabase = await createClient();

    const searchParams = useSearchParams();
    const { data: newEntry, error } = await supabaseComponent
        .from('entries')
        .update(form)
        .eq("id", searchParams.get('id'))
        .select()

}
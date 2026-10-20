'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/supabase/server";
import { cookies } from "next/headers";

export async function login(formData: FormData) {

    const cookieStore = await cookies();
    const supabase = await createClient(cookieStore);

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        console.error("Login Error: ", error.message);
        return;
    }
        redirect('/')


}

export async function signup(formData: FormData) {

    const cookieStore = await cookies();
    const supabase = await createClient(cookieStore);

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        console.error("Signup Error: ", error.message);
        return;
    }

        redirect('/')


}
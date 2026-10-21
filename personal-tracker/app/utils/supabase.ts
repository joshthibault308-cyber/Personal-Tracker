// import {
//   createClientComponentClient,
//   createRouteHandlerClient,
// } from "@supabase/auth-helpers-nextjs";

import {createClient} from "@supabase/supabase-js";

const URL: string | null | undefined =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const ANON: string | null | undefined =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";

export const supabaseClient = URL && ANON
? createClient(URL, ANON, { auth: {persistSession: false}})
: (null as any);

export const supabaseComponent = supabaseClient;

export const supabaseRouteHandler = (_cookies: any) => supabaseClient;
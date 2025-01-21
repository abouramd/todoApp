"use server";

import { signOut } from "@/auth";

export default async function logOut() {
    "use server";
    await signOut();
}
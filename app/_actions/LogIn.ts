"use server";

import { signIn } from "@/auth";

export async function logInGithub() {
    "use server";
    await signIn('github');
}

export async function logInGoogle() {
    "use server";
    await signIn('google');
}


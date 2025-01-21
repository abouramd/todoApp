import { signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function LogIn() {
    const logIn = async () => {
        "use server";
        await signIn('github');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-6">Welcome to Todo App</h1>
            <Button onClick={logIn}><Github /> Sign In</Button>
        </div>
    );
}

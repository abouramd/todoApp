"use client";

import { Button } from "@/components/ui/button";
import { Github, Chrome } from "lucide-react";
import { logInGithub, logInGoogle } from '../_actions/LogIn'
import { GridPatternCard, GridPatternCardBody } from "@/components/ui/card-with-grid-ellipsis-pattern";

export default function LogIn() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <GridPatternCard className="w-full max-w-md mx-auto">
        <GridPatternCardBody>
          <div className="text-2xl text-center">
            <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Todo App</h1>
          </div>
          <div className="flex flex-col space-y-2">
            <Button className="w-full" onClick={logInGithub}><Github /> Sign In With Github</Button>
            <Button className="w-full" onClick={logInGoogle}><Chrome /> Sign In With Google</Button>
          </div>
        </GridPatternCardBody>
      </GridPatternCard>
    </main>
  );
}






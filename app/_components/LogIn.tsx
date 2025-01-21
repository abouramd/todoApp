import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { logInGithub, logInGoogle } from '../_actions/LogIn'
import { Card, CardHeader } from "@/components/ui/card";

export default function LogIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="p-6">
        <CardHeader>
          <h1 className="text-4xl font-bold mb-6">Welcome to Todo App</h1>
        </CardHeader>
        <Button variant="outline" className="w-full mb-2" onClick={logInGithub}><Github /> Sign In</Button>
        <Button variant="outline" className="w-full mb-2" onClick={logInGoogle}><Mail /> Sign In</Button>
      </Card>
    </div>
  );
}

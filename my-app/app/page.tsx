import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center size-full">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Please enter your login information</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label>E-mail/Username</Label>
              <input type="text" placeholder="Enter Email or Username" />
            </div>
            <div className="grid gap-2">
              <Label>Password</Label>
              <input type="password" placeholder="Enter your Password" />
              <Button type= "submit" className="w-full">Click to login</Button>
            </div>
            {/* Add a submit button or any additional elements here */}
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
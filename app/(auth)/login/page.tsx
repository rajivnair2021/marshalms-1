
import { Button } from "@/components/ui/button"
import  GithubIcon  from "@/components/icons/github"
import {
  Card,
 
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
export default function LoginPage() {
  return (
   <Card>
    <CardHeader>
      <CardTitle className="text-xl">Welcome Back!</CardTitle>
        <CardDescription>Login with your Github Email Account</CardDescription>
   
    </CardHeader>
    <CardContent className="flex flex-col gap-4">



      <Button className="w-full" variant="outline">
<GithubIcon/>
        Sign in with Github</Button>
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center
      after:border-t after:border-border
      ">

<span>Or continue with</span>

      </div>

<div className="grid gap-3">
<div className="grid gap-2">
    <Label htmlFor="email">Email</Label>
    <Input  type="email" placeholder="Enter your email" />
</div>
<Button>Continue with Email</Button>
</div>

    </CardContent>
   </Card>
  )
}

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Mail, Github } from "lucide-react"
 
import { Button } from "@/components/ui/button"

export default function AuthPage() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card>
                <CardHeader>
                    <CardTitle>Let&apos;s Socialize!</CardTitle>
                    <CardDescription>Join our community to meet new and exciting people in your field of interest.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button>
                        <Mail className="mr-2 h-4 w-4" /> Login with Email
                    </Button>
                </CardContent>
                <CardContent>
                    <Button>
                        <Mail className="mr-2 h-4 w-4" /> Login with Outlook
                    </Button>
                </CardContent>
                <CardContent>
                    <Button>
                        <Github className="mr-2 h-4 w-4" /> Login with GitHub
                    </Button>
                </CardContent>
                <CardFooter>
                    <p>Not a member? <Button>Signup</Button></p>
                </CardFooter>
            </Card>
        </div>
    );
}
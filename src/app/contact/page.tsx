import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

import Link from 'next/link'

export default function ContactPage() {
  return (
    <>
        <header className="bg-white text-zinc-900 py-4 border-b">
            <div className="container mx-auto px-4 md:px-6">
                <nav className="flex items-center justify-between">
                    <div className="text-2xl font-bold">SOCIALIZE</div>
                    <div className="space-x-4">
                        <Link className="text-zinc-900 hover:text-zinc-700" href="/">Home</Link>
                        <Link className="text-zinc-900 hover:text-zinc-700" href="#">About</Link>
                        <Link className="text-zinc-900 hover:text-zinc-700" href="#">Tech</Link>
                        <Link className="text-zinc-900 hover:text-zinc-700" href="/contact">Contact</Link>
                    </div>
                </nav>
            </div>
        </header>
        <div className="flex items-center justify-center h-screen">
            <Card>
                <CardContent>
                <div className="space-y-8">
                    <div className="space-y-2">
                    <h2 className="text-3xl font-semibold pt-4">Contact Us</h2>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        Fill out the form below and we&apos;ll get back to you as soon as possible.
                    </p>
                    </div>
                    <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Enter your email" type="email" />
                    </div>
                    <div className="space-y-2">
                        <Label>Issue Type</Label>
                        <Select>
                        <SelectTrigger aria-label="Issue Type">
                            <SelectValue placeholder="Select your issue type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Issue Type</SelectLabel>
                            <SelectItem value="he/him">He/Him</SelectItem>
                            <SelectItem value="she/her">She/Her</SelectItem>
                            <SelectItem value="they/them">They/Them</SelectItem>
                            <SelectItem value="prefer not to say">Prefer not to say</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
                    </div>
                    <Button className="bg-gray-800 text-white" type="submit">
                        Send message
                    </Button>
                    </div>
                </div>
                </CardContent>
            </Card>
        </div>
    </>
    
  )
}
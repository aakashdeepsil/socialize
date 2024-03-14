"use client"

import React, { useState } from 'react';
import Link from 'next/link';

import { Mail, Github } from "lucide-react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { signUpWithGithub } from '../actions';

export default function AuthPage() {
    return (
        <>
            <header className="bg-white text-zinc-900 py-4 border-b">
                <div className="container mx-auto px-4 md:px-6">
                    <nav className="flex items-center justify-between">
                        <div className="text-2xl font-bold">SOCIALIZE</div>
                        <div className="space-x-4">
                            <Link className="text-zinc-900 hover:text-zinc-700" href="/">Home</Link>
                            <Link className="text-zinc-900 hover:text-zinc-700" href="/about">About</Link>
                            <Link className="text-zinc-900 hover:text-zinc-700" href="/tech">Tech</Link>
                            <Link className="text-zinc-900 hover:text-zinc-700" href="/contact">Contact</Link>
                        </div>
                    </nav>
                </div>
            </header>
            <main>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Let&apos;s Socialize!</CardTitle>
                            <CardDescription>Join our community to meet new and exciting people in your field of interest.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href="/auth/signup/email">
                                <Button>
                                    <Mail className="mr-2 h-4 w-4" /> Signup with Email
                                </Button>
                            </Link>
                        </CardContent>
                        <CardContent>
                            <Button onClick={signUpWithGithub}>
                                <Github className="mr-2 h-4 w-4" /> Sign up with GitHub
                            </Button>
                        </CardContent>
                        <CardFooter>
                            <p>Already have an account? <Link href="/auth/login">Login</Link></p>
                        </CardFooter>
                    </Card>
                </div>
            </main>
        </>
    );
}
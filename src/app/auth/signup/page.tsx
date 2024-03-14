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
    );
}
"use client"

import React, { useState } from 'react';

import Link from 'next/link';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Mail, Github } from "lucide-react"
 
import { Button } from "@/components/ui/button";

import { signInWithGithub } from '../actions';

export default function AuthPage() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card>
                <CardHeader>
                    <CardTitle>Let&apos;s Socialize!</CardTitle>
                    <CardDescription>Join our community to meet new and exciting people in your field of interest.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="/auth/login/email">
                        <Button>
                            <Mail className="mr-2 h-4 w-4" /> Login with Email
                        </Button>
                    </Link> 
                </CardContent>
                <CardContent>
                    <Button onClick={signInWithGithub}>
                        <Github className="mr-2 h-4 w-4" /> Login with GitHub
                    </Button>
                </CardContent>
                <CardFooter>
                    <p>Not a member? <Link href="/auth/signup">Signup</Link></p>
                </CardFooter>
            </Card>
        </div>
    );
}
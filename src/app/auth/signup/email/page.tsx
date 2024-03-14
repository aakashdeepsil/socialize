"use client"

import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { signUpWithEmailandPassword } from '../../actions';
 
const formSchema = z.object({
    username: z.string().min(2).max(50),
    emailAddress: z.string().email(),
    password: z.string().min(8).max(100).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/, "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"),
    passwordConfirmation: z.string().min(8).max(100).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/),
}).refine(data => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
});

export default function SignupWithEmailAndPassword() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            emailAddress: "",
            password: "",
            passwordConfirmation: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        await signUpWithEmailandPassword(values);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card>
                <CardHeader>
                    <CardTitle>Let&apos;s Socialize!</CardTitle>
                    <CardDescription>Join our community to meet new and exciting people in your field of interest.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="emailAddress"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="" type="password"  {...field} />
                                </FormControl>
                                <FormDescription>
                                    Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.
                                </FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="passwordConfirmation"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Password Confirmation</FormLabel>
                                <FormControl>
                                    <Input placeholder="" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <Button type="submit">Create Account</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter>
                    <CardDescription>Once the account is successful, you will be redirected to the homepage. Please check your inbox to verfiy your email address.</CardDescription>
                </CardFooter>
            </Card>
        </div>
    );
}
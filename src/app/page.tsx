"use client"

import Link from 'next/link'

import { Button } from "@/components/ui/button";

export default function Home() {
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
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    The Future of Networking
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    The only networking platform you&apos;ll ever need. Find people from your field of interest. Grow your network. Boost your career.
                                </p>
                            </div>
                            <div className='inline-block'>
                                <Link href="/auth/signup"><Button className='mr-2'>Get Started</Button></Link>
                                <Link href="/auth/login"><Button>Login</Button></Link>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Get updates on our progress.
                                    <Link className="underline underline-offset-2" href="#">
                                        Terms & Conditions
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
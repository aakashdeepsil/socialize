"use client"

import { createClient } from '@/utils/supabase/client';

import Link from 'next/link'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button";

export default function Home() {
    const supabase = createClient();
    
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error){
            console.error('Error logging out:', error);
        }
        else{
            const { data, error } = await supabase.auth.getSession();
            if (error){
                console.error('Error getting session:', error);
            }
            else{
                console.log('Session:', data['session']);
            }
        }
    };

    return (
        <>
            <header>
                <div className='homepage-nav-menu'>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/auth/login">Login</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/auth/signup">Signup</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Button onClick={handleLogout}>Logout</Button>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </header>
            <main>
                <div className='homepage-welcome-heading'>
                    <h2>Welcome to Socialize</h2>
                </div>
            </main>
        </>
    );
}
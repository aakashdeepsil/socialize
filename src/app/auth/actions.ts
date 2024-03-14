'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function handleLogout() {
    const supabase = createClient()

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
            revalidatePath('/', 'layout')
            redirect('/');
        }
    }
}

export async function signInWithEmailandPassword(values : { emailAddress: string, password: string }) {
    const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithPassword({
        email: values.emailAddress,
        password: values.password,
    })

    if (error) {
        console.error('Error logging in to your account:', error);
        redirect('/auth/login/error')
    } else {
        console.log('Logged in successfully:', data);
        revalidatePath('/onboarding', 'layout')
        redirect('/onboarding')
    }
}

export async function signUpWithEmailandPassword(values : { emailAddress: string, password: string }) {
    const supabase = createClient()

    const { data, error } = await supabase.auth.signUp({
        email: values.emailAddress,
        password: values.password,
    });
    
    if (error) {
        console.error('Error creating an account:', error);
        redirect('/auth/signup/error')
    } else {
        console.log('Account created successfully:', data);
        revalidatePath('/', 'layout')
        redirect('/')
    }
}

export async function signUpWithGithub() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
    })
    
    if (error) {
        console.error('Error creating an account:', error);
        redirect('/auth/signup/error')
    }

    if (data) {
        console.log('Account created successfully:', data);
        revalidatePath('/onboarding', 'layout')
        redirect('/onboarding')
    }
}

export async function signInWithGithub() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
    })
    
    if (error) {
        console.error('Error logging into the account:', error);
        redirect('/auth/login/error')
    }

    if (data) {
        console.log('Logged in successfully:', data);
        revalidatePath('/onboarding', 'layout')
        redirect('/onboarding')
    }
}
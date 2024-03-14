'use client'

import { Button } from "@/components/ui/button";

import { handleLogout } from '../auth/actions';

export default function OnboardingPage() {
    return (
        <div>
            <h1>Onboarding Page</h1>
            <Button onClick={() => handleLogout()}>Logout</Button>
        </div>
    )
}
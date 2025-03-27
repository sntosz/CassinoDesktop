import { Input } from '@/components/ui/input';
import React from 'react';

interface AuthProps {
    children: React.ReactNode;
}

export function Auth({ children }: AuthProps) {
    return (
        <main className="bg-gradient-to-b from-[#07080D] to-[#1D1F2C] h-screen w-screen flex flex-col">
            <div className="flex flex-1 items-center justify-between min-h-0">
                <div className="w-1/2 flex justify-center items-center h-full">
                    <img 
                        className="animate-fadeUp mx-auto max-h-full object-contain" 
                        src="/banner.png" 
                        alt="Banner" 
                    />
                </div>
                <div className="w-1/2 flex justify-center items-center animate-fadeUp mx-auto h-full">
                    {children}
                </div>
            </div>
        </main>
    );
}
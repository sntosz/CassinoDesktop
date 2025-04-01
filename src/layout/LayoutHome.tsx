import { Sidebar } from '@/components/Sidebar/Sidebar';
import React from 'react';

interface LayoutHomeProps {
    children: React.ReactNode;
}

export function LayoutHome({ children }: LayoutHomeProps) {
    return (
        <div className='flex bg-gradient-to-b from-[#07080D] to-[#1D1F2C] h-screen w-screen'>
            <Sidebar>
            </Sidebar>
            <div className=' p-10'>
                {children}
            </div>
        </div>
    );
}
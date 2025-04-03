import { Sidebar } from '@/components/Sidebar/Sidebar';
import React from 'react';

interface LayoutHomeProps {
    children: React.ReactNode;
}

export function LayoutHome({ children }: LayoutHomeProps) {
    return (
        <div className=' h-screen bg-gradient-to-b from-[#07080D] to-[#1D1F2C] '>
            <Sidebar>
            </Sidebar>
            <div className='ml-80 p-14'>
                {children}
            </div>
        </div>
    );
}
import React from 'react';
import { cn } from '@/lib/utils';

interface LabelProps {
  htmlFor?: string; 
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({ 
  htmlFor, 
  children, 
  className, 
  required 
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'text-sm font-medium text-gray-300 mb-2',
        required && 'flex items-center',
        className
      )}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};
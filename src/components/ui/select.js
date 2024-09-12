// src/components/ui/Select.js
import React from 'react';

export function Select({ children, className, ...props }) {
  return (
    <div className={`relative ${className}`}>
      <select className="block w-full bg-white border border-gray-300 rounded-md p-2" {...props}>
        {children}
      </select>
    </div>
  );
}

export function SelectTrigger({ children, className, ...props }) {
  return (
    <div className={`relative ${className}`} {...props}>
      {children}
    </div>
  );
}

export function SelectContent({ children, className, ...props }) {
  return (
    <div className={`absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md ${className}`} {...props}>
      {children}
    </div>
  );
}

export function SelectItem({ children, className, ...props }) {
  return (
    <div className={`p-2 hover:bg-gray-100 cursor-pointer ${className}`} {...props}>
      {children}
    </div>
  );
}

export function SelectValue({ placeholder, className, ...props }) {
  return (
    <div className={`p-2 text-gray-500 ${className}`} {...props}>
      {placeholder}
    </div>
  );
}

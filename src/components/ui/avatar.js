// components/ui/avatar.js

import React from 'react';

export function Avatar({ children, className }) {
  return (
    <div className={`w-16 h-16 rounded-full overflow-hidden bg-gray-200 ${className}`}>
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt = '', className }) {
  return (
    <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} onError={(e) => e.target.style.display = 'none'} />
  );
}

export function AvatarFallback({ children, className }) {
  return (
    <div className={`w-full h-full flex items-center justify-center bg-gray-400 text-white font-bold ${className}`}>
      {children}
    </div>
  );
}

// src/components/ui/Card.js
import React from 'react';

export function Card({ className, children }) {
  return (
    <div className={`rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }) {
  return (
    <div className={`p-4 border-b ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className, children }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children }) {
  return (
    <div className={`p-4 border-t ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children }) {
  return (
    <h2 className={`text-xl font-bold ${className}`}>
      {children}
    </h2>
  );
}

export function CardDescription({ className, children }) {
  return (
    <p className={`text-sm ${className}`}>
      {children}
    </p>
  );
}

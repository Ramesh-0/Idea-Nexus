import React from 'react';

export function Textarea({ id, value, onChange, className = '', ...props }) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      className={`resize-none border border-gray-300 rounded-md p-2 ${className}`}
      {...props}
    />
  );
}

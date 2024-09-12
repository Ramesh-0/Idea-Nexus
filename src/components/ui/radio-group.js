// components/ui/radio-group.js

import React from 'react';

export function RadioGroup({ children, value, onValueChange, className }) {
  const handleChange = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { checked: value === child.props.value, onChange: handleChange })
      )}
    </div>
  );
}

export function RadioGroupItem({ value, checked, onChange, className }) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className={`form-radio text-purple-600 ${className}`}
      />
      <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
    </label>
  );
}

import React from 'react';
import PropTypes from 'prop-types';

// Define the Input component with React.forwardRef
const Input = React.forwardRef(({
  type = 'text',
  id,
  value,
  onChange,
  placeholder,
  className = '',
  ...props
}, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`block w-full p-2 text-purple-600 border border-purple-200 rounded-lg focus:outline-none focus:ring focus:ring-purple-500 ${className}`}
      {...props}
    />
  );
});

// Define PropTypes for the Input component
Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

// Define default props for the Input component
Input.defaultProps = {
  type: 'text',
  className: '',
};

export default Input; // Use default export to match the import statement in your other files

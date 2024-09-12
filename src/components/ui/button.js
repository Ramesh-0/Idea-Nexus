import React from 'react';
import PropTypes from 'prop-types';

// Define the available button variants with their Tailwind CSS classes
const buttonVariants = {
  primary: 'bg-purple-600 hover:bg-purple-700 text-white',
  secondary: 'bg-purple-200 hover:bg-purple-300 text-purple-600',
  destructive: 'bg-red-600 hover:bg-red-700 text-white',
  outline: 'border border-purple-600 hover:bg-purple-600 text-purple-600 hover:text-white',
  ghost: 'hover:bg-purple-100 text-purple-600',
  link: 'text-purple-600 hover:text-purple-800',
};

// Button component definition with variant and className props
const Button = ({ variant = 'primary', className = '', children, ...props }) => {
  // Combine default variant styles with any additional classes
  const buttonClassNames = `rounded-lg py-2 px-4 ${buttonVariants[variant]} ${className}`;
  
  return (
    <button className={buttonClassNames} {...props}>
      {children}
    </button>
  );
};

// Define PropTypes for the Button component
Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'destructive', 'outline', 'ghost', 'link']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// Define default props for the Button component
Button.defaultProps = {
  variant: 'primary',
  className: '',
};

export default Button;

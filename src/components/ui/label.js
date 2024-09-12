import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, children, className = '', ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-purple-600 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Label.defaultProps = {
  className: '',
};

export default Label;

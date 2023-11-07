import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'default' ; // Add more variants as needed
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  className = '',
  ...props
}) => {
  // Define base styling
  const baseStyle = 'px-4 py-2 rounded-lg';

  // Define variant styling
  const variantStyles = {
    primary: 'bg-primary-indigo text-white hover:bg-primary-indigo-hover',
    secondary: 'bg-white text-primary-indigo border border-primary-indigo hover:bg-primary-indigo-hover hover:text-white',
    danger: 'bg-wite text-red-500 border border-red-600 hover:bg-red-600 hover:text-white',
    default: 'hover:bg-light-gray',
  };

  // Combine base, variant and additional className props
  const buttonClasses = `${baseStyle} ${variantStyles[variant]} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {label}
    </button>
  );
};

export default Button;

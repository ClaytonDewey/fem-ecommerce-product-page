import React, { forwardRef } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', ...props }, ref) => {
    return <button type={type} {...props} ref={ref} />;
  }
);

Button.displayName = 'Button';

export default Button;

import * as React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

type ButtonSize = 'default' | 'sm' | 'lg' | 'icon' | 'small' | 'medium' | 'large';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  asChild?: boolean;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'contained' | 'outlined' | 'text';
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "contained", size = "medium", className, asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
      });
    }

    let muiVariant: MuiButtonProps['variant'] = 'contained';

    if (variant === 'link' || variant === 'ghost') {
      muiVariant = 'text';
    } else if (variant === 'outline') {
      muiVariant = 'outlined';
    } else if (variant === 'contained') {
      muiVariant = 'contained';
    } else if (variant === 'text') {
      muiVariant = 'text';
    } else if (variant === 'outlined') {
      muiVariant = 'outlined';
    }

    let muiSize: MuiButtonProps['size'] = 'medium';
    if (size === 'sm' || size === 'small') {
      muiSize = 'small';
    } else if (size === 'lg' || size === 'large') {
      muiSize = 'large';
    } else if (size === 'default') {
      muiSize = 'medium';
    }

    return (
      <MuiButton
        ref={ref}
        variant={muiVariant}
        size={muiSize}
        sx={{
          textTransform: "lowercase",
        }}
        {...props}
      >
        {children}
      </MuiButton>
    );
  }
);
Button.displayName = "Button";

export { Button }; 
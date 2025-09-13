import * as React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

// Define our custom size type that includes both shadcn and MUI sizes
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon' | 'small' | 'medium' | 'large';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  asChild?: boolean;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'contained' | 'outlined' | 'text';
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "contained", size = "medium", className, asChild = false, children, ...props }, ref) => {
    // If asChild is true, just render children with props
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        // Don't pass ref to the children as it could cause errors
      });
    }

    // Map shadcn variants to MUI variants
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

    // Map shadcn sizes to MUI sizes
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
          // Let theme handle font family
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
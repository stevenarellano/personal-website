import * as React from "react";
import { Chip, ChipProps as MuiChipProps } from "@mui/material";

export interface BadgeProps extends Omit<MuiChipProps, 'variant' | 'children'> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  children?: React.ReactNode;
}

function Badge({
  className,
  variant = 'default',
  label,
  children,
  ...props
}: BadgeProps) {
  const getColor = () => {
    switch (variant) {
      case 'default':
        return 'primary';
      case 'secondary':
        return 'secondary';
      case 'destructive':
        return 'error';
      case 'outline':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <Chip
      size="small"
      label={children || label}
      color={getColor()}
      variant={variant === 'outline' ? 'outlined' : 'filled'}
      sx={{
        textTransform: 'lowercase',
        fontFamily: "'Times New Roman', Times, serif",
        borderRadius: '4px',
        fontSize: '0.75rem',
      }}
      {...props}
    />
  );
}

export { Badge }; 
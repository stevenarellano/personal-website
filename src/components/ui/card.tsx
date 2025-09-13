import * as React from "react";
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardActions,
  CardHeader as MuiCardHeader,
  Typography
} from "@mui/material";

const Card = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof MuiCard>
>(({ className, ...props }, ref) => (
  <MuiCard
    ref={ref}
    elevation={0}
    sx={{
      borderRadius: '8px',
      boxShadow: 'none',
      background: 'none',
      fontFamily: "'Times New Roman', Times, serif",
      marginBottom: 0,
    }}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof MuiCardHeader>
>(({ className, ...props }, ref) => (
  <MuiCardHeader
    ref={ref}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<typeof Typography>
>(({ className, ...props }, ref) => (
  <Typography
    ref={ref}
    variant="h6"
    component="h3"
    sx={{
      fontWeight: 600,
      textTransform: 'lowercase',
      fontFamily: "'Times New Roman', Times, serif",
      marginBottom: 0,
    }}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<typeof Typography>
>(({ className, ...props }, ref) => (
  <Typography
    ref={ref}
    variant="body2"
    color="text.secondary"
    sx={{
      fontSize: '0.875rem',
      textTransform: 'lowercase',
      fontFamily: "'Times New Roman', Times, serif",
      marginBottom: 0,
    }}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof MuiCardContent>
>(({ className, ...props }, ref) => (
  <MuiCardContent
    ref={ref}
    sx={{ paddingTop: 0, marginBottom: 0 }}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof CardActions>
>(({ className, ...props }, ref) => (
  <CardActions
    ref={ref}
    sx={{ paddingTop: 0, marginBottom: 0 }}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }; 
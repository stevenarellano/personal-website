import * as React from "react";
import {
  Tabs as MuiTabs,
  Tab,
  Box
} from "@mui/material";

interface TabsListProps extends React.ComponentPropsWithoutRef<typeof MuiTabs> {
  children: React.ReactNode;
}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(TabsContext);

    return (
      <MuiTabs
        ref={ref}
        variant="fullWidth"
        centered
        value={context?.value || false}
        onChange={(event, newValue) => context?.onChange(newValue)}
        sx={{
          minHeight: '40px',
          backgroundColor: 'action.hover',
          borderRadius: '8px',
          padding: '4px',
          '& .MuiTab-root': {
            textTransform: 'lowercase',
            fontFamily: "'Times New Roman', Times, serif",
            minHeight: '32px',
          }
        }}
        {...props}
      >
        {children}
      </MuiTabs>
    );
  }
);
TabsList.displayName = "TabsList";

interface TabsTriggerProps {
  value: string;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

interface TabsContextType {
  value: string;
  onChange: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

const TabsTrigger = ({ className, value, children, ...props }: TabsTriggerProps) => {
  const context = React.useContext(TabsContext);
  const isActive = context?.value === value;

  return (
    <Tab
      value={value}
      label={children}
      sx={{
        textTransform: 'lowercase',
        fontFamily: "'Times New Roman', Times, serif",
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'text.primary' : 'text.secondary',
        backgroundColor: isActive ? 'background.paper' : 'transparent',
        '&.Mui-selected': {
          color: 'text.primary',
        }
      }}
      {...props}
    />
  );
};
TabsTrigger.displayName = "TabsTrigger";

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    const isActive = context?.value === value;

    if (!isActive) return null;

    return (
      <Box
        ref={ref}
        role="tabpanel"
        sx={{
          p: 2,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);
TabsContent.displayName = "TabsContent";

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

const Tabs = ({
  defaultValue,
  value,
  onValueChange,
  children,
  ...props
}: TabsProps) => {
  const [tabValue, setTabValue] = React.useState(value || defaultValue || "");

  React.useEffect(() => {
    if (value !== undefined) {
      setTabValue(value);
    }
  }, [value]);

  const handleChange = (newValue: string) => {
    if (value === undefined) {
      setTabValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value: tabValue, onChange: handleChange }}>
      <div {...props}>{children}</div>
    </TabsContext.Provider>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent }; 
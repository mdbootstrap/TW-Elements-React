interface PopoverHeaderTheme {
  popoverHeader?: string;
}

interface PopoverHeaderProps extends React.AllHTMLAttributes<HTMLHeadElement> {
  tag?: React.ComponentProps<any>;
  theme?: PopoverHeaderTheme;
}

export { PopoverHeaderProps };

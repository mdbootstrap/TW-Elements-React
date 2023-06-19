interface BackdropTheme {
  wrapper: string;
}

interface BackdropProps {
  className?: string;
  appendToBody?: boolean;
  show: boolean;
  animate?: boolean;
  theme?: BackdropTheme;
  [rest: string]: any;
}

export { BackdropProps, BackdropTheme };

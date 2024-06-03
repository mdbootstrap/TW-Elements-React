import React from "react";
interface RippleTheme {
    ripple?: string;
    rippleOverflow?: string;
    rippleWave?: string;
    rippleWaveActive?: string;
    rippleWaveInactive?: string;
    unbound?: string;
}
interface RippleProps extends React.AllHTMLAttributes<HTMLElement> {
    rippleUnbound?: boolean;
    rippleColor?: string;
    rippleColorDark?: string;
    rippleRadius?: number;
    rippleDuration?: number;
    rippleCentered?: boolean;
    ref?: React.ForwardedRef<any>;
    rippleTag?: React.ComponentProps<any>;
    theme?: RippleTheme;
}
export { RippleProps };

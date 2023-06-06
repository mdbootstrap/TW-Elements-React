const RippleTheme = {
  ripple: "relative inline-block align-bottom",
  rippleOverflow:
    "absolute left-0 top-0 overflow-hidden w-full h-full pointer-events-none",
  rippleWave:
    "block rounded-[50%] pointer-events-none absolute touch-none transition-[transform,_opacity] ease-[cubic-bezier(0,0,0.15,1),_cubic-bezier(0,0,0.15,1)] z-[999] scale-0",
  rippleWaveActive: "scale-100 opacity-0",
  rippleWaveInactive: "scale-0 opacity-50",
  unbound: "overflow-visible",
};

export default RippleTheme;

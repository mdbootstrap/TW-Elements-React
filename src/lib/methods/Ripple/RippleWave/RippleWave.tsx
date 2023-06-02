import clsx from "clsx";
import React, { useState, useEffect } from "react";
import type { RippleWaveProps } from "./types";

const MDBRippleWave: React.FC<RippleWaveProps> = ({ theme, style }) => {
  const [isActive, setIsActive] = useState(false);

  const rippleClasses = clsx(
    theme.rippleWave,
    isActive ? theme.rippleWaveActive : theme.rippleWaveInactive
  );

  useEffect(() => {
    setIsActive(true);
  }, []);

  return <div style={style} className={rippleClasses}></div>;
};

export default MDBRippleWave;

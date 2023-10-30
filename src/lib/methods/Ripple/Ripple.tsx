/*
--------------------------------------------------------------------------
TW Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import clsx from "clsx";
import React, { useState, useEffect, useRef } from "react";
import type { RippleProps } from "./types";
import MDBRippleWave from "./RippleWave/RippleWave";
import rippleTheme from "./rippleTheme";

const useCombinedRefs = (...refs: any) => {
  const targetRef = React.useRef();
  React.useEffect(() => {
    refs.forEach((ref: any) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

const TERipple: React.FC<RippleProps> = /*#__PURE__*/ React.forwardRef<
  HTMLAllCollection,
  RippleProps
>(
  (
    {
      className,
      rippleTag: Tag = "div",
      rippleCentered,
      rippleDuration = 500,
      rippleUnbound,
      rippleRadius = 0,
      rippleColor = "dark",
      rippleColorDark = "",
      children,
      onMouseDown,
      theme: customTheme,
      ...props
    },
    ref
  ) => {
    const rippleRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, rippleRef);

    const theme = { ...rippleTheme, ...customTheme };

    const GRADIENT =
      "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%";

    const DEFAULT_RIPPLE_COLOR = [0, 0, 0];

    const BOOTSTRAP_COLORS = [
      { name: "primary", gradientColor: "#3B71CA" },
      { name: "secondary", gradientColor: "#9FA6B2" },
      { name: "success", gradientColor: "#14A44D" },
      { name: "danger", gradientColor: "#DC4C64" },
      { name: "warning", gradientColor: "#E4A11B" },
      { name: "info", gradientColor: "#54B4D3" },
      { name: "light", gradientColor: "#fbfbfb" },
      { name: "dark", gradientColor: "#262626" },
    ];

    const [rippleStyles, setRippleStyles] = useState<
      {
        left: string;
        top: string;
        height: string;
        width: string;
        transitionDelay: string;
        transitionDuration: string;
      }[]
    >([]);

    const [rippleWaveClasses, setRippleWaveClasses] = useState<string[]>([]);

    const classes = clsx(theme.ripple, className);

    const rippleClasses = clsx(
      rippleUnbound ? theme.unbound : theme.rippleOverflow,
      rippleWaveClasses
    );

    const setupColor = () => {
      let rippleColorCurrent = rippleColor || "rgb(0,0,0)";

      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        rippleColorCurrent = rippleColorDark || rippleColor || "rgb(0,0,0)";
      }

      const IS_BOOTSTRAP_COLOR = BOOTSTRAP_COLORS.find(
        (color) => color.name === rippleColorCurrent?.toLowerCase()
      );

      const rgbValue = IS_BOOTSTRAP_COLOR
        ? colorToRGB(IS_BOOTSTRAP_COLOR.gradientColor).join(",")
        : colorToRGB(rippleColorCurrent).join(",");

      const gradientImage = GRADIENT.split("{{color}}").join(`${rgbValue}`);
      return `radial-gradient(circle, ${gradientImage})`;
    };

    const colorToRGB = (color: any) => {
      const hexToRgb = (color: string) => {
        const HEX_COLOR_LENGTH = 7;

        const IS_SHORT_HEX = color.length < HEX_COLOR_LENGTH;

        if (IS_SHORT_HEX) {
          color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
        }

        return [
          parseInt(color.substr(1, 2), 16),
          parseInt(color.substr(3, 2), 16),
          parseInt(color.substr(5, 2), 16),
        ];
      };

      const namedColorsToRgba = (color: string) => {
        const tempElem = document.body.appendChild(
          document.createElement("fictum")
        );

        const flag = "rgb(1, 2, 3)";

        tempElem.style.color = flag;

        if (tempElem.style.color !== flag) {
          return DEFAULT_RIPPLE_COLOR;
        }

        tempElem.style.color = color;

        if (tempElem.style.color === flag || tempElem.style.color === "") {
          return DEFAULT_RIPPLE_COLOR;
        } // color parse failed

        color = getComputedStyle(tempElem).color;

        document.body.removeChild(tempElem);

        return color;
      };

      const rgbaToRgb = (color: any) => {
        color = color.match(/[.\d]+/g).map((a: any) => +Number(a));
        color.length = 3;
        return color;
      };

      if (color.toLowerCase() === "transparent") {
        return DEFAULT_RIPPLE_COLOR;
      }
      if (color[0] === "#") {
        return hexToRgb(color);
      }
      if (color.indexOf("rgb") === -1) {
        color = namedColorsToRgba(color);
      }
      if (color.indexOf("rgb") === 0) {
        return rgbaToRgb(color);
      }

      return DEFAULT_RIPPLE_COLOR;
    };

    const getDiameter = (data: any) => {
      const { offsetX, offsetY, height, width } = data;

      const top = offsetY <= height / 2;
      const left = offsetX <= width / 2;
      const pythagorean = (sideA: number, sideB: number) =>
        Math.sqrt(sideA ** 2 + sideB ** 2);

      const positionCenter = offsetY === height / 2 && offsetX === width / 2;

      const quadrant = {
        first: top === true && left === false,
        second: top === true && left === true,
        third: top === false && left === true,
        fourth: top === false && left === false,
      };

      const getCorner = {
        topLeft: pythagorean(offsetX, offsetY),
        topRight: pythagorean(width - offsetX, offsetY),
        bottomLeft: pythagorean(offsetX, height - offsetY),
        bottomRight: pythagorean(width - offsetX, height - offsetY),
      };

      let diameter = 0;

      if (positionCenter || quadrant.fourth) {
        diameter = getCorner.topLeft;
      } else if (quadrant.third) {
        diameter = getCorner.topRight;
      } else if (quadrant.second) {
        diameter = getCorner.bottomRight;
      } else if (quadrant.first) {
        diameter = getCorner.bottomLeft;
      }
      return diameter * 2;
    };

    const getRoundedClasses = () => {
      // prettier-ignore
      if (!children || !React.isValidElement(children) || Array.isArray(children) || !children.props.className) {
        return [];
      }

      const classes: string[] = children.props.className.split(" ");

      return classes.filter((item) => item.includes("rounded"));
    };

    const getStyles = (e: any) => {
      // eslint-disable-next-line
      // @ts-ignore
      const itemRect = combinedRef.current?.getBoundingClientRect();

      const offsetX = e.clientX - itemRect.left;
      const offsetY = e.clientY - itemRect.top;
      const height = itemRect.height;
      const width = itemRect.width;

      const diameterOptions = {
        offsetX: rippleCentered ? height / 2 : offsetX,
        offsetY: rippleCentered ? width / 2 : offsetY,
        height,
        width,
      };

      const opacity = {
        delay: rippleDuration && rippleDuration * 0.5,
        duration: rippleDuration && rippleDuration - rippleDuration * 0.5,
      };

      const diameter = getDiameter(diameterOptions);
      const radiusValue = rippleRadius || diameter / 2;

      const styles = {
        left: rippleCentered
          ? `${width / 2 - radiusValue}px`
          : `${offsetX - radiusValue}px`,
        top: rippleCentered
          ? `${height / 2 - radiusValue}px`
          : `${offsetY - radiusValue}px`,
        height: rippleRadius ? `${rippleRadius * 2}px` : `${diameter}px`,
        width: rippleRadius ? `${rippleRadius * 2}px` : `${diameter}px`,
        transitionDelay: `0s, ${opacity.delay}ms`,
        transitionDuration: `${rippleDuration}ms, ${opacity.duration}ms`,
      };

      setRippleWaveClasses(getRoundedClasses());

      return { ...styles, backgroundImage: `${setupColor()}` };
    };

    const handleMouseDown = (e: any) => {
      const styles = getStyles(e);

      const newStyles = rippleStyles.concat(styles);
      setRippleStyles(newStyles);

      onMouseDown && onMouseDown(e);
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        if (rippleStyles.length > 0) {
          setRippleStyles(rippleStyles.splice(1, rippleStyles.length - 1));
        }
      }, rippleDuration);

      return () => {
        clearTimeout(timer);
      };
    }, [rippleDuration, rippleStyles]);

    return (
      <Tag
        className={classes}
        onMouseDown={(e: any) => handleMouseDown(e)}
        ref={combinedRef}
        {...props}
      >
        {children}
        <div className={rippleClasses}>
          {rippleStyles.map((item, i) => (
            <MDBRippleWave theme={theme} key={i} style={item}></MDBRippleWave>
          ))}
        </div>
      </Tag>
    );
  }
);

export default TERipple;

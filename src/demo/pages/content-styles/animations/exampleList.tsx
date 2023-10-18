import React from "react";
import AnimationsBasicExample from "./examples/AnimationsBasicExample";
import AnimationsAll from "./examples/AnimationsAll";
import AnimationsOnClick from "./examples/AnimationsOnClick";
import AnimationsOnHover from "./examples/AnimationsOnHover";
import AnimationsOnLoad from "./examples/AnimationsOnLoad";
import AnimationsManually from "./examples/AnimationsManually";
import AnimationsLaunchingExternal from "./examples/AnimationsLaunchingExternal";
import AnimationsStartManually from "./examples/AnimationsStartManually";
import AnimationsChangeType from "./examples/AnimationsChangeType";
import AnimationsListGroup from "./examples/AnimationsListGroup";
import AnimationsOnScroll from "./examples/AnimationsOnScroll";
import AnimationsRepeatOnScroll from "./examples/AnimationsRepeatOnScroll";
import AnimationsShowOnLoad from "./examples/AnimationsShowOnLoad";
import AnimationsFadingGallery from "./examples/AnimationsFadingGallery";

export default [
  {
    name: "AnimationsAll",
    path: "/content-styles/animations/examples/animations-all",
    element: <AnimationsAll />,
  },
  {
    name: "AnimationsBasicExample",
    path: "/content-styles/animations/examples/animations-basic-example",
    element: <AnimationsBasicExample />,
  },
  {
    name: "AnimationsOnClick",
    path: "/content-styles/animations/examples/animations-on-click",
    element: <AnimationsOnClick />,
  },
  {
    name: "AnimationsOnHover",
    path: "/content-styles/animations/examples/animations-on-hover",
    element: <AnimationsOnHover />,
  },
  {
    name: "AnimationsOnLoad",
    path: "/content-styles/animations/examples/animations-on-load",
    element: <AnimationsOnLoad />,
  },
  {
    name: "AnimationsManually",
    path: "/content-styles/animations/examples/animations-manually",
    element: <AnimationsManually />,
  },
  {
    name: "AnimationsLaunchingExternal",
    path: "/content-styles/animations/examples/animations-launching-external",
    element: <AnimationsLaunchingExternal />,
  },
  {
    name: "AnimationsStartManually",
    path: "/content-styles/animations/examples/animations-start-manually",
    element: <AnimationsStartManually />,
  },
  {
    name: "AnimationsChangeType",
    path: "/content-styles/animations/examples/animations-change-type",
    element: <AnimationsChangeType />,
  },
  {
    name: "AnimationsListGroup",
    path: "/content-styles/animations/examples/animations-list-group",
    element: <AnimationsListGroup />,
  },
  {
    name: "AnimationsOnScroll",
    path: "/content-styles/animations/examples/animations-on-scroll",
    element: <AnimationsOnScroll />,
    fullscreenOnly: true,
  },
  {
    name: "AnimationsRepeatOnScroll",
    path: "/content-styles/animations/examples/animations-repeat-on-scroll",
    element: <AnimationsRepeatOnScroll />,
    fullscreenOnly: true,
  },
  {
    name: "AnimationsShowOnLoad",
    path: "/content-styles/animations/examples/animations-show-on-load",
    element: <AnimationsShowOnLoad />,
    fullscreenOnly: true,
  },
  {
    name: "AnimationsFadingGallery",
    path: "/content-styles/animations/examples/animations-fading-gallery",
    element: <AnimationsFadingGallery />,
    fullscreenOnly: true,
  },
];

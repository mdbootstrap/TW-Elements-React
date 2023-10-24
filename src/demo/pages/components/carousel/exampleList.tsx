import React from "react";
import CarouselBasicExample from "./examples/CarouselBasicExample";
import CarouselSlidesOnly from "./examples/CarouselSlidesOnly";
import CarouselWithControls from "./examples/CarouselWithControls";
import CarouselWithIndicators from "./examples/CarouselWIthIndicators";
import CarouselCrossfade from "./examples/CarouselCrossfade";
import CarouselDarkVariant from "./examples/CarouselDarkVariant";

export default [
  {
    name: "CarouselBasicExample",
    path: "/components/carousel/examples/carousel-basic-example",
    element: <CarouselBasicExample />,
  },
  {
    name: "CarouselSlidesOnly",
    path: "/components/carousel/examples/carousel-slides-only",
    element: <CarouselSlidesOnly />,
  },
  {
    name: "CarouselWithControls",
    path: "/components/carousel/examples/carousel-with-controls",
    element: <CarouselWithControls />,
  },
  {
    name: "CarouselWithIndicators",
    path: "/components/carousel/examples/carousel-with-indicators",
    element: <CarouselWithIndicators />,
  },
  {
    name: "CarouselCrossfade",
    path: "/components/carousel/examples/carousel-crossfade",
    element: <CarouselCrossfade />,
  },
  {
    name: "CarouselDarkVariant",
    path: "/components/carousel/examples/carousel-dark-variant",
    element: <CarouselDarkVariant />,
  },
];

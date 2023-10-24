import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselCrossfade(): JSX.Element {
  return (
    <>
      <TECarousel showControls showIndicators crossfade ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            data-te-carousel-item
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            data-te-carousel-item
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            data-te-carousel-item
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}

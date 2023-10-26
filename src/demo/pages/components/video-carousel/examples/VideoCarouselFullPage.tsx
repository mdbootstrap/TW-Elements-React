import React from "react";
import { TECarousel, TECarouselItem, TERipple } from "tw-elements-react";

export default function VideoCarouselFullPageExample(): JSX.Element {
  return (
    <TECarousel
      showControls
      showIndicators
      crossfade
      ride="carousel"
      pause={false}
      theme={{
        carouselWrapper: "relative h-screen",
        indicatorsWrapper:
          "absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 z-30",
      }}
    >
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <TECarouselItem
          itemID={1}
          className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <video
            className="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0"
            playsInline
            autoPlay
            muted
            loop
          >
            <source
              className=""
              src="https://mdbootstrap.com/img/video/Lines.mp4"
              type="video/mp4"
            />
          </video>
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="flex h-full items-center justify-center">
              <div className="px-md-0 px-14 text-center text-white">
                <h2 className="mb-4 text-3xl font-semibold">
                  Learn TW elements
                </h2>
                <h5 className="mb-6 text-lg font-semibold">
                  Best & free guide of responsive web design
                </h5>
                <div className="md:space-x-2">
                  <TERipple rippleColor="light">
                    <a
                      type="button"
                      className="mb-2 inline-block rounded border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 md:mb-0"
                      href="#!"
                      role="button"
                    >
                      Start tutorial
                    </a>
                  </TERipple>
                  <TERipple rippleColor="light">
                    <a
                      type="button"
                      className="inline-block rounded border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                      href="#!"
                      role="button"
                    >
                      Read more
                    </a>
                  </TERipple>
                </div>
              </div>
            </div>
          </div>
        </TECarouselItem>
        <TECarouselItem
          itemID={2}
          className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <video
            className="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0"
            playsInline
            autoPlay
            muted
            loop
          >
            <source
              className=""
              src="https://mdbootstrap.com/img/video/forest.mp4"
              type="video/mp4"
            />
          </video>
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-white text-center px-14 px-md-0">
                <h2 className="text-3xl font-semibold mb-4">
                  You can place here any content
                </h2>
              </div>
            </div>
          </div>
        </TECarouselItem>
        <TECarouselItem
          itemID={3}
          className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <video
            className="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0"
            playsInline
            autoPlay
            muted
            loop
          >
            <source
              className=""
              src="https://mdbootstrap.com/img/video/Tropical.mp4"
              type="video/mp4"
            />
          </video>
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{
              background:
                "linear-gradient(45deg, rgba(29, 236, 197, 0.7), rgba(91, 14, 214, 0.7) 100%)",
            }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-white text-center px-14 px-md-0">
                <h2 className="text-3xl font-semibold mb-4">
                  And cover it with any mask
                </h2>
                <TERipple rippleColor="light">
                  <a
                    type="button"
                    className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    href="#!"
                    role="button"
                  >
                    Learn more
                  </a>
                </TERipple>
              </div>
            </div>
          </div>
        </TECarouselItem>
      </div>
    </TECarousel>
  );
}

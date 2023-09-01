import React from "react";
import { TECarousel, TECarouselControl, TECarouselIndicators } from "tw-elements-react";

export default function BasicExample(): JSX.Element {
  return (<TECarousel
    items={[
      <img 
        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
        className="block w-full h-full object-cover"
      />,
      <img 
        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
        className="block w-full h-full object-cover"
      />,
      <img 
        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
        className="block w-full h-full object-cover"
      />,
    ]}
    className="relative"
  >
    <TECarouselControl 
      direction="prev"
      className="flex w-[12%] items-center justify-center border-0 bg-none text-center text-white-strong opacity-50 transition-opacity duration-50 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white-strong hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none" 
    >
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={'w-8 h-8'}>
        <title>Previous</title>
        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
      </svg>
    </TECarouselControl>
    <TECarouselIndicators
      className="list-none absolute w-full bottom-[5%] flex justify-center"
      Component={() => (<span
        role="presentation"
        className="block relative mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity ease-[cubic-bezier(0.25,0.1,0.25,1.0)] duration-[600ms] motion-reduce:transition-none"
      />)}
      ActiveComponent={() => (<span
        role="presentation"
        className="block relative mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-100 transition-opacity ease-[cubic-bezier(0.25,0.1,0.25,1.0)] duration-[600ms] motion-reduce:transition-none"
      />)}
    />
    <TECarouselControl
      direction="next"
      className="flex w-[12%] items-center justify-center border-0 bg-none text-center text-white-strong opacity-50 transition-opacity duration-50 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white-strong hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={'w-8 h-8'}>
        <title>Next</title>
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
      </svg>
    </TECarouselControl>
  </TECarousel>)
}
/*
--------------------------------------------------------------------------
Tailwind Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/
import React, { useMemo, useReducer } from "react";

import { CarouselConfigContext } from "./context/CarouselConfigContext";
import { CarouselDispatchContext } from "./context/CarouselDispatchContext";
import { carouselReducer } from "./reducer/carouselReducer";
import { CarouselStateContext } from "./context/CarouselStateContext";
import CarouselContainer from "./CarouselContainer/CarouselContainer";
import { CarouselConfig, CarouselProps } from "./types";

const TECarousel: React.FC<CarouselProps & Partial<CarouselConfig>> = ({ 
  interval = 5000,
  touch = true,
  keyboard = true,
  ride = false,
  items,
  children,
  ...props
}) => {
  const config: CarouselConfig = useMemo(() => ({
    interval,
    touch,
    keyboard,
    ride
  }), [
    interval,
    touch,
    keyboard,
    ride
  ]);

  const [ state, dispatch ] = useReducer(carouselReducer, {
    items: [],
    activeItemId: 0,
    desiredItemId: 0,
    isRotating: ride === 'carousel',
  });

  return (<CarouselConfigContext.Provider value={config}>
    <CarouselDispatchContext.Provider value={dispatch}>
      <CarouselStateContext.Provider value={state}>
        <CarouselContainer
          items={items}
          {...props}
        > 
          {children}
        </CarouselContainer>
      </CarouselStateContext.Provider>
    </CarouselDispatchContext.Provider>
  </CarouselConfigContext.Provider>)
}

export default TECarousel;
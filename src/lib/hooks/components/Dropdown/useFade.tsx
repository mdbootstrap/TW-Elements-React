/*
--------------------------------------------------------------------------
Tailwind Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import { useEffect, useState, useContext } from "react";
import { DropdownContext } from "../../../components/Dropdown/context/DropdownContext";

export const useFade = () => {
  const { isOpenState } = useContext(DropdownContext);

  const [isFadeIn, setIsFadeIn] = useState(false);
  const [isFadeOut, setIsFadeOut] = useState(false);
  const [show, setShow] = useState(isOpenState);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!isOpenState) {
      setIsFadeOut(true);
      setIsFadeIn(false);

      timer = setTimeout(() => {
        setIsFadeOut(false);
        setShow(false);
      }, 300);
    }

    if (isOpenState) {
      setIsFadeIn(true);
      setIsFadeOut(false);
      setShow(true);

      timer = setTimeout(() => {
        setIsFadeIn(false);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [isOpenState]);

  return { show, isFadeIn, isFadeOut };
};

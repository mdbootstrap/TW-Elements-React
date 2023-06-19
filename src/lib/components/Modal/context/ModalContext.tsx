import React, { createContext } from "react";

interface ModalContextProps {
  isOpenModal: boolean;
  setTransitionDuration: React.SetStateAction<any>;
  scrollable: boolean;
}

const ModalContext = createContext<ModalContextProps>({
  isOpenModal: false,
  setTransitionDuration: null,
  scrollable: false,
});

export { ModalContext };

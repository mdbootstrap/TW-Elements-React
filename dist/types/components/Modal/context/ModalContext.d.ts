import React from "react";
interface ModalContextProps {
    isOpenModal: boolean;
    setTransitionDuration: React.SetStateAction<any>;
    scrollable: boolean;
}
declare const ModalContext: React.Context<ModalContextProps>;
export { ModalContext };

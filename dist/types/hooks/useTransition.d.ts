import React from "react";
declare const useTransition: (referenceElement: React.MutableRefObject<HTMLElement | null> | HTMLElement | null, classNames?: string, defaultDuration?: number) => {
    transitionDuration: number;
    onTransitionShow: (callback?: () => any) => void;
    onTransitionHide: (callback?: () => any) => void;
    getTransitionTime: (element: HTMLElement) => void;
};
export { useTransition };

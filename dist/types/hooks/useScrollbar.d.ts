declare const useScrollbar: () => {
    scrollbarHide: () => void;
    scrollbarReset: () => void;
    getWidth: () => number;
};
export { useScrollbar };

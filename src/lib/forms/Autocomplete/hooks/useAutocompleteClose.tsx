import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
} from "react";

type UseAutocompleteClosesProps = {
  isOpened: boolean;
  dropdownRef: RefObject<HTMLDivElement>;
  inputRef: RefObject<HTMLInputElement>;
  setOpenState: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
};

const useAutocompleteClose = ({
  isOpened,
  inputRef,
  dropdownRef,
  setOpenState,
  onClose,
}: UseAutocompleteClosesProps) => {
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const isInput = inputRef.current === e.target;
      const isDropdown = dropdownRef.current === e.target;
      const isDropdownContent = dropdownRef.current?.contains(e.target as Node);

      if (isOpened && !isInput && !isDropdown && !isDropdownContent) {
        setOpenState(false);
        onClose?.();
      }
    },
    [isOpened, setOpenState, dropdownRef, inputRef, onClose]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useAutocompleteClose;

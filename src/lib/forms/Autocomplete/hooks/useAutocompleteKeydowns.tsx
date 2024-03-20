import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

type useAutocompleteKeydownProps = {
  isOpen: boolean;
  setOpenState: Dispatch<SetStateAction<boolean>>;
  length?: number;
};

const useAutocompleteKeydown = ({ isOpen, setOpenState, length }: useAutocompleteKeydownProps) => {
  const [activeElement, setActiveElement] = useState(-1);

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      const isTab = e.key === 'Tab';
      const isEscape = e.key === 'Escape';
      const isArrowUp = e.key === 'ArrowUp';
      const isArrowDown = e.key === 'ArrowDown';
      const isHome = e.key === 'Home';
      const isEnd = e.key === 'End';
      const isEnter = e.key === 'Enter';

      const lastIndex = (length as number) - 1;

      if (!isOpen) return setActiveElement(-1);

      if (isEscape || isEnter || isTab) return setOpenState(false);

      if (isArrowDown) return setActiveElement((prev) => (prev === lastIndex ? lastIndex : prev + 1));

      if (isArrowUp) return setActiveElement((prev) => (prev === 0 ? 0 : prev - 1));

      if (isHome) return setActiveElement(0);

      if (isEnd) return setActiveElement(lastIndex);
    },
    [isOpen, setOpenState, length]
  );

  useEffect(() => {
    setActiveElement(-1);
  }, [length]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  return activeElement;
};

export default useAutocompleteKeydown;

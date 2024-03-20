import { RefObject, useCallback, useEffect } from 'react';

type UseAutocompleteClosesProps = {
  dropdownRef: RefObject<HTMLDivElement>;
  inputRef: RefObject<HTMLInputElement>;
};

const useAutocompleteResize = ({ inputRef, dropdownRef }: UseAutocompleteClosesProps) => {
  const handleResize = useCallback(() => {
    if (!inputRef.current || !dropdownRef.current) return;

    const { width } = window.getComputedStyle(inputRef.current);
    dropdownRef.current.style.width = width;
  }, [dropdownRef, inputRef]);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);
};

export default useAutocompleteResize;

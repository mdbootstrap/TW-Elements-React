import { useEffect, useState } from 'react';

type UseAutocompleteAnimationProps = {
  isOpen: boolean;
};

const useAutocompleteAnimation = ({ isOpen }: UseAutocompleteAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isOpen) {
      setIsVisible(true);
    } else {
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, 100);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen]);

  return isVisible;
};

export default useAutocompleteAnimation;

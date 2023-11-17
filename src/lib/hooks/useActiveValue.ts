import { useMemo } from "react";

const useActiveValue = (propValue: any, stateValue: any) => {
  return useMemo(() => {
    if (propValue !== undefined) {
      return propValue;
    }

    return stateValue;
  }, [propValue, stateValue]);
};

export default useActiveValue;

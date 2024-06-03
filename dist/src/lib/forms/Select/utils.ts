import type { ExtendedSelectData } from './types';

export const isArraysEqual = (arr1: ExtendedSelectData[], arr2: ExtendedSelectData[]) => {
  // check if both arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const obj1: any = arr1[i];
    const obj2: any = arr2[i];

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length || !keys1.every((key) => keys2.includes(key))) {
      return false;
    }

    if (!keys1.every((key) => obj1[key] === obj2[key])) {
      return false;
    }
  }
  return true;
};

import { React, useState } from "react";
import { useLocalStorage } from "./localStorageKullan";
export const useGecemodu = (key, initialValue) => {
  const [geceModu, setGeceModu] = useLocalStorage(key, initialValue);
  return [geceModu, setGeceModu];
};

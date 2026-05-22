"use client";

import { useEffect, useRef, useCallback, type RefObject } from "react";

export function useOutsideClick<T extends HTMLElement>(
  callback: () => void,
  ref?: RefObject<T | null>
): RefObject<T | null> {
  const internalRef = useRef<T>(null);
  const elementRef = ref || internalRef;

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    },
    [callback, elementRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return elementRef;
}

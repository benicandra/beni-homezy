"use client";

import { useEffect, type RefObject } from "react";

interface UseModalBehaviorOptions {
  ref: RefObject<HTMLElement | null>;
  onClose: () => void;
  enabled?: boolean;
}

export function useModalBehavior({ ref, onClose, enabled = true }: UseModalBehaviorOptions) {
  useEffect(() => {
    if (!enabled) return;

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [ref, onClose, enabled]);
}

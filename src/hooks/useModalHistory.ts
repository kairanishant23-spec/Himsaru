'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * Handles smooth mobile back/forward gesture & hardware button behavior for modals and drawers.
 *
 * When a modal opens:
 * - A synthetic history state is pushed so pressing the mobile phone's back button
 *   dismisses the modal instead of navigating away / exiting the site.
 * - When the user clicks the X button or backdrop, we cleanly remove the synthetic state.
 * - When the user clicks a navigation link, we close without popping history, letting
 *   Next.js navigate cleanly without race conditions.
 */
export function useModalHistory(isOpen: boolean, onClose: () => void): () => void {
  const isPushed = useRef(false);
  const closingRef = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      isPushed.current = false;
      closingRef.current = false;
      return;
    }

    // Preserve existing Next.js history state so routing works smoothly
    const currentState = window.history.state || {};
    window.history.pushState({ ...currentState, __himsaruModal: true }, '');
    isPushed.current = true;
    closingRef.current = false;

    const handlePopState = () => {
      // User pressed back button or swiped back on mobile
      isPushed.current = false;
      onClose();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen, onClose]);

  // Clean close for X button / backdrop click
  const handleClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;

    if (isPushed.current && window.history.state?.__himsaruModal) {
      isPushed.current = false;
      window.history.back();
    }
    onClose();
  }, [onClose]);

  return handleClose;
}

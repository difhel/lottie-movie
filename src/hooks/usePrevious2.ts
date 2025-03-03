import { useRef } from 'react';

// This is not render-dependent and will never allow previous to match current
export default function usePrevious2<T>(current: T) {
  const prevRef = useRef<T>(undefined);
  const lastRef = useRef<T>(undefined);

  prevRef.current = lastRef.current;

  lastRef.current = current;

  return prevRef.current;
}

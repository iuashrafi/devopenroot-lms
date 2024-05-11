import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDeboundedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeboundedValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}

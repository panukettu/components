import { useContext, useRef, useEffect, useState } from "React";

export function useToggleContext() {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error(
      "Context not found! You need to use Toggle-components inside Toggle."
    );
  }

  return context;
}

export function useEffectAfterMount(cb, dependencies) {
  const justMounted = useRef(true);
  useEffect(() => {
    if (!justMounted.current) {
      return cb();
    }
    justMounted.current = false;
  }, dependencies);
}

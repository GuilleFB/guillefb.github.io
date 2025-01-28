export const isBrowser = typeof window !== 'undefined';
export const isMobile = isBrowser ? window.matchMedia('(pointer: coarse)').matches : false;
export const canUseDOM: boolean =
  typeof window !== 'undefined' &&
  window.document?.createElement !== undefined;
export const isApple: boolean = canUseDOM && /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);

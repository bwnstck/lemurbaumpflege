const getVw = (): number =>
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

export const isMobile = (): boolean => getVw() < 1760;

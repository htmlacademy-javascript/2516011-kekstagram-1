const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, args), timeoutDelay);
  };
};

const throttle = (callback, delayBetweenFrames) => {
  let lastTime = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, args);
      lastTime = now;
    }
  };
};

export { debounce, throttle };

function debounce(
  fn: Function,
  time = 17,
  options = { leading: true, context: null },
) {
  let timer: NodeJS.Timeout | null;
  const _debounce = function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    if (options.leading && !timer) {
      timer = setTimeout(() => {}, time);
      fn.apply(options.context, args);
    } else {
      timer = setTimeout(() => {
        fn.apply(options.context, args);
        timer = null;
      }, time);
    }
  };
  _debounce.cancel = function () {
    clearTimeout(timer!);
    timer = null;
  };
  return _debounce;
}

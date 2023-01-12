export const formatNumbers = (numbers) => String(numbers).replace(/(.)(?=(\d{3})+$)/g, '$1 ');

export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

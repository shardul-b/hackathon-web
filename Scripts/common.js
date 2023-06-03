const elementSelector = (element, multiple = false) => {
  if (multiple) {
    return document.querySelectorAll(element);
  }
  return document.querySelector(element);
};

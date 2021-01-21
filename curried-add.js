function curriedAdd(total) {
  if (total === undefined) return 0;
  return function (num) {
    if (num === undefined) return total;
    return curriedAdd(num + total);
  }
}

module.exports = { curriedAdd };

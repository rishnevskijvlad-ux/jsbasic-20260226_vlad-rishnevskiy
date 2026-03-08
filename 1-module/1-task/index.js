function factorial(n) {
  if (n < 0) {
    return null;
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

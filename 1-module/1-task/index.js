function factorial(n) {
let i = 1;
  while(n > 1) {
    i *= n--;
}
if (n === 0) {
  return false;
}
return i;
}
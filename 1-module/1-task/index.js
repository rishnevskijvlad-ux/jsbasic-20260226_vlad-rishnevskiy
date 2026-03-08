function factorial(n) {
let i = 1;
  while(n > 1) {
    i *= n--;
  }
return i;
}
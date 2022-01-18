function strictEquals(a, b) {
  let equalNumbers = Object.is(a, b);
  return equalNumbers;
}

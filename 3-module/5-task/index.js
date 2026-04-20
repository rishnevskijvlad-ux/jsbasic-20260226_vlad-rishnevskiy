function getMinMax(str) {
  const nums = str.match(/-?\d+(\.\d+)?/g).map(Number);

  return {
    min: Math.min(...nums),
    max: Math.max(...nums)
  };a
}

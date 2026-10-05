function analyzeArray(arr) {
  if (arr.length === 0) {
    throw new Error("Array must not be empty");
  }

  const sum = arr.reduce((total, currentNumber) => {
    return total + currentNumber;
  }, 0);

  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

module.exports = { analyzeArray };

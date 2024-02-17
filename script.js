const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
 const result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // If adding the current element doesn't exceed the maximum sum
    if (currentSum + arr[i] <= n) {
      currentChunk.push(arr[i]);
      currentSum += arr[i];
    } else {
      // If adding the current element exceeds the maximum sum,
      // push the current chunk to the result and start a new chunk
      result.push(currentChunk);
      currentChunk = [arr[i]];
      currentSum = arr[i];
    }
  }

  // Push the last chunk to the result
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

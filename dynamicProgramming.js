

const lengthOfMatchingSubstring = (string1, string2) => {
  // Create Matrix
  let matrix = [];
  string1.split('').forEach(letterR => {
    let row = [];
    // Set each cell to 0
    string2.split('').forEach(letterC => row.push(0));
    matrix.push(row);
  });

  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      // If letters match
      if(string1[i] === string2[j]) {
        if(matrix[i-1]) {
          // Set current cell equal previous, diagonal + 1
          matrix[i][j] += matrix[i-1][j-1] + 1;
        }
      }
    }
  }

  console.log(matrix);
  // Find highest value in the matrix
  let maxValue = 0;
  matrix.forEach(r => r.forEach(c => c > maxValue ? maxValue = c : maxValue = maxValue));
  console.log(`Max value is ${maxValue}`);
  return maxValue;
}

lengthOfMatchingSubstring('hish', 'fish');

const lengthOfMatchingSequence = (string1, string2) => {
  // Create Matrix
  let matrix = [];
  string1.split('').forEach(letterR => {
    let row = [];
    // Set each cell to 0
    string2.split('').forEach(letterC => row.push(0));
    matrix.push(row);
  });

  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      // If letters match
      if(string1[i] === string2[j]) {
        if(matrix[i-1]) {
          // Set current cell equal previous, diagonal + 1
          matrix[i][j] += matrix[i-1][j-1] + 1;
        }
      } else {
        // Pick the largest number of the cell above, and cell left of current cell
        const top = matrix[i-1][j];
        const left = matrix[i][j-1];
        const largest = top > left ? top : left;

        matrix[i][j] = largest;
      }
    }
  }

  lengthOfMatchingSubsequence('hish', 'fish');

  console.log(matrix);
  // Find highest value in the matrix
  let maxValue = 0;
  matrix.forEach(r => r.forEach(c => c > maxValue ? maxValue = c : maxValue = maxValue));
  console.log(`Max value is ${maxValue}`);
  return maxValue;
}

lengthOfMatchingSubstring('hish', 'fish');
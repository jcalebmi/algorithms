

const lengthOfMatchingSubstring = (string1, string2) => {
  let matrix = [];

  string1.split('').forEach(letterR => {
    let row = [];

    string2.split('').forEach(letterC => row.push(0));

    matrix.push(row);
  });

  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if(string1[i] === string2[j]) {
        if(matrix[i-1]) {
          matrix[i][j] += matrix[i-1][j-1] + 1;
        }
      }
    }
  }

  console.log(matrix);

  const maxValue = matrix.pop().pop();
  console.log(`Max value is ${maxValue}`);
  return maxValue;
}

lengthOfMatchingSubstring('hish', 'fish');
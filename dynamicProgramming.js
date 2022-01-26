

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

const lengthOfMatchingSubsequence = (string1, string2) => {
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
        // Pick the largest value from the cell to the left and cell on top
        let top = 0;
        let left = 0;
        if (matrix[i-1]) {
          top = matrix[i-1][j];
        }
        if(matrix[i][j-1]) {
          left = matrix[i][j-1];
        }

        const largest = top > left ? top : left;
        // Set current cell equal to the largest previous value
        matrix[i][j] = largest;
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

const knapSackProblem = (items, size) => {
  // Create matrix
    // One row for each item
    // One column for each size
  let matrix = [];
  Object.keys(items).forEach((k,i) => {
    // Create row for each item
    let row = [];
    const itemSize = items[k].size;
    const itemValue = items[k].value;
    // Create column for each size of bag
    for(let j = 0; j < size; j++) {
      const currentSize = j+1;
      let currentItems = [k];
      let currentMax = 0;

      // If first row, fill values for first item
      if(i === 0) {
        if(itemSize <= currentSize) {
          currentMax += itemValue;
        }
        row.push({items: currentItems, value: currentMax});
      } else {
        // If not first row
        // get prev cell, prev max, and prev items
        const prevCell = matrix[i-1][j];
        const prevMax = prevCell.value;
        const prevItems = prevCell.items;

        // If current item takes up entire space
          // Set value equal to current item
        if (currentSize - itemSize === 0) {
          currentMax = itemValue;
        } else if(currentSize - itemSize > 0) {
          // If there is space left over
            // Set value equal to current item plus the value of remaining space
            // Set items equal to current item plus the items that fit in the left over space
          currentMax = itemValue + matrix[i-1][currentSize - itemSize].value;
          currentItems = currentItems.concat(matrix[i-1][currentSize - itemSize].items);
        }

        // Set new max and new list of items
          // Choose between value of previous item && value of current item + value of remaining space
        const newMax = prevMax > currentMax ? prevMax : currentMax;
        const newItems = prevMax > currentMax ? prevItems : currentItems;
        row.push(
          {items: newItems, value: newMax}
        );
      }

    }
    matrix.push(row);
  });

  console.log(matrix);
  const final = matrix.pop().pop();
  const finalItems = final.items;
  const maxValue = final.value;
  console.log('FINAL ITEMS',final);
}

const items = {
  guitar: {
    value: 1500,
    size: 1
  },
  stereo: {
    value: 3000,
    size: 4
  },
  laptop: {
    value: 2000,
    size: 3
  }
}

const items2 = {
  guitar: {
    value: 1500,
    size: 1
  },
  stereo: {
    value: 3000,
    size: 4
  },
  laptop: {
    value: 2000,
    size: 3
  },
  iphone: {
    value: 2000,
    size: 1
  }
}

// lengthOfMatchingSubstring('hish', 'fish');
// lengthOfMatchingSubsequence('hish', 'fish');
knapSackProblem(items, 4);
knapSackProblem(items2, 4);
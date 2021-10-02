const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

// Bit-O: O(n2)
// Not very fast
// Finds smallest element, adds to new array, deletes from old array and repeats

const selectionSort = (arr, newArr) => {
  newArr = newArr || [];

  if (arr.length === 0) {
    console.log(newArr);
    return;
  }

  let smallest = findSmallest(arr);
  newArr.push(arr.splice(smallest, 1)[0]);

  selectionSort(arr, newArr);
}

selectionSort([4, 5, 2, 1]);
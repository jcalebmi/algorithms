// Big-O:
  // O(logn) on average
    // More likely with a random pivot or pivot near the middle
    // Choosing the first index is more likely to result in O(n2)
  // O(n2) at worst
    // Speed depends on pivot point
      // Has a faster constant time than merge sort
      // Merger sort is always O(logn) but
       // at O(logn), quick sort is faster than merge sort



// D&C (divide and conquer) strategy
// Based off euclids Algorithm
// Partitions data
  // Sorts everything less than in a box to the left
  // Sorts everything greater than in a box to the right
    // Repeats process with each side
    // Once the smallest box that works is found, you know what works for the entire list


const quickSort = (arr) => {
  // If only 2 items exist in array, we can sort it
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[0];
    let left = [];
    let right = [];

    // Split array into lesser and greater sides
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] < arr[0]) {
        left.push(arr[i]);
      }
      if (arr[i] > arr[0]) {
        right.push(arr[i]);
      }
    }

    // Sort the left and right arrays
    let leftRes = quickSort(left);
    let rightRes = quickSort(right);

    if (leftRes === undefined) {
      leftRes = [];
    }
    if (rightRes === undefined) {
      rightRes = [];
    }

    // Combine left array with pivot point and right array
    leftRes.push(pivot);
    const result = leftRes.concat(rightRes);

    // return sorted array
    console.log(result);
    return result;
  }
}

quickSort([10,5,2,3])
const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] < arr[0]) {
        left.push(arr[i]);
      }
      if (arr[i] > arr[0]) {
        right.push(arr[i]);
      }
    }

    let leftRes = quickSort(left);
    let rightRes = quickSort(right);

    if (leftRes === undefined) {
      leftRes = [];
    }
    if (rightRes === undefined) {
      rightRes = [];
    }

    leftRes.push(pivot);
    return (leftRes.concat(rightRes))
  }
}

quickSort([10,5,2,3])
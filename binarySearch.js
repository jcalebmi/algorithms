// Big-O: O(nLog n)
// Worst Case:
  //n items takes log2n steps to complete
// requires sorted list

const binarySearch = (arr, item) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    let guess = arr[mid];

    if (guess === item) {
      console.log(mid);
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    }
    if (guess < item) {
      low = mid + 1;
    }
  }
}

const list = [3, 5, 10, 100, 52, 24];
binarySearch(list, 10);
binarySearch(list, 100);

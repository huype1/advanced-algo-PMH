// O(n log n): if the pivot is choosen randomly
// O(n^2): if the pivot is choosen as the last element and the array is already sorted
// because the pivot is always the largest so the inner loop will run everytime until the sort is over
// using divide and conquer algorithm 
// using this to call the partition function and recurse it
function qs(arr: number[], low:number, hi:number): void {
  if (low > hi) {
    return ;
  }
  const pivotIdx = partition(arr, low, hi);

  qs(arr, low, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

// this function are for finding the pivot and then moving the smaller value to the left of it and then the larger to the right of it
function partition(arr: number[], low: number, hi: number) : number {
  const pivot = arr[hi];

  let idx = low-1;
  //only take the range from low to high
  for (let i = low; i < hi; ++i) {
    //when the value of idx is larger and i is smaller then pivot then swap
    if (arr[i] <= pivot) {
      // when it is actually smaller swap it with a larger value on the left side
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }
  //move it to the new value or move it to 0 if no invalid value
  idx++;
  //swap the higher value with the pivot so it will be in the smaller left and larger right position
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;

}
export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length-1);
}
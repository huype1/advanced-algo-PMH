
// độ phức tạp thuật toán: O(n^2)
//  T(n) = n + (n-1) + (n-2) + ... + 1 = n(n-1)/2 = O(n²)
export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i ; j < arr.length - i - 1; ++j) {
      if (arr[j] >arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}; 
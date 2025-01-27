//O(n)
export default function linear_search(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; ++i) {
    if (haystack[i] == needle) { // tim kiem n lan trong truong hop te nhat
      return true;
    }
  }
  return false;

}
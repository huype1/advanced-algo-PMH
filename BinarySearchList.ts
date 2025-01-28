//  O(log n)
    //  - T(n) = T(n/2) + c
    //  Theo định lý Master : a = 1, b = 2, f(n) = c
    //  - log_b(a) = log_2(1) = 0
    //  - f(n) = O(1) = O(n^0)
    //  - T(n) = O(log n)
function recurse_find(
    arr: number[],
    min: number,
    max: number,
    needle: number,
): boolean {
    if (min > max) {
        return false;
    }
    let mid = Math.floor((max - min) / 2);
    if (arr[mid] === needle) {
        return true;
        //always return a value in recursive function or it will overflow the callstack
    } else if (arr[mid] > needle) {
        return recurse_find(arr, min, mid - 1, needle);
    } else {
        return recurse_find(arr, mid + 1, max, needle);
    }
}
export default function bs_list(haystack: number[], needle: number): boolean {
    return recurse_find(
        haystack,
        0,
        haystack.length - 1,
        needle,
    );
}

function DpMaxSubString(
    a: string[],
    b: string[],
    i: number,
    j: number,
    res: string[],
): string[] {
    if (i > a.length - 1 || j > b.length - 1) return res;

    if (a[i] === b[j]) {
        return DpMaxSubString(a, b, i + 1, j + 1, res.concat(a[i]));
    } else {
        let branch1 = DpMaxSubString(a, b, i, j + 1, res);
        let branch2 = DpMaxSubString(a, b, i + 1, j, res);

        return branch1.length > branch2.length ? branch1 : branch2;
    }
}
let x = "ABCDEFG",
    y = "CCEDEGF";
console.log(DpMaxSubString(x.split(""), y.split(""), 0, 0, []) || []);
function MaxSub (A: number[]): void {
  if (A.length === 0) {
    return ;
  }
  //tong mang con lon nhat
  let smax: number = A[0];
  //tong mang con tam thoi
  let maxendhere: number = A[0];

  //bat dau va ket thuc
  let startmax = 0;
  let imax = 0;

  //temp bat dau cua mang con
  let currentStart = 0;

  for (let i = 1; i < A.length; i++) {
    let u = maxendhere + A[i];
    let v = A[i];

    if (u > v) {
      maxendhere = u;
    } else {
      maxendhere = v;
      currentStart = i;
    }
    if (maxendhere > smax) {
      smax = maxendhere;
      imax = i;
      startmax = currentStart;
    }
  }
  console.log("bat dau: ", startmax, "ket thuc: ", imax, "Max: ", smax);
}
MaxSub([-2, 1, -3, 4, -1, 2, 1, -5, 4])

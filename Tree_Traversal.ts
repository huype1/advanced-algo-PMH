declare type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};
function pre_order_walk(curr: BinaryNode<number> | null, path: number[]): void {
  if (!curr) {
    return ;
  }

  path.push(curr.value);

  pre_order_walk(curr.left, path);
  pre_order_walk(curr.right, path);

}
 function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
  pre_order_walk(head, path);
  return path;

}

function in_order_walk(curr: BinaryNode<number> | null, path: number[]): void {
  if (!curr) {
    return ;
  }

  in_order_walk(curr.left, path);
  path.push(curr.value);
  in_order_walk(curr.right, path);


}
 function in_order_search(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  in_order_walk(head, path)
  return path;

}

function post_order_walk(curr: BinaryNode<number> | null, path: number[]): void {
  if (!curr) {
    return ;
  }

  post_order_walk(curr.left, path);
  post_order_walk(curr.right, path);

  path.push(curr.value);
}
 function post_order_search(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  post_order_walk(head, path);
  return path;
}
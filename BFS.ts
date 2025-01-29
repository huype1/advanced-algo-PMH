export type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const queue: (BinaryNode<number> | null)[] = [head];

  while (queue.length) {
    const curr = queue.shift() as BinaryNode<number> | undefined | null;
    if (!curr) {
      continue;
    }

    if (curr.value === needle) {
      return true;
    }
    queue.push(curr.left);
    queue.push(curr.right);
  }
  return false;
}
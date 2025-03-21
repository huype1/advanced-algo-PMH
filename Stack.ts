type Node<T> = {
    value: T,
    prev?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    public head?: Node<T> ;
    

    constructor() {
        this.head = undefined;
        this.length = 0; 
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;

        if (this.head === undefined) {
            this.head = node;
            return;
        }

        node.prev = this.head; 
        this.head = node;
}
    pop(): T | undefined {
        this.length = Math.max(this.length-1, 0);
        const head = this.head as Node<T>;
        if (this.length === 0) {
            this.head = undefined;
            return head?.value;
        }
        this.head = head?.prev;

        return head?.value;

}
    peek(): T | undefined {
        return this.head?.value;

}
}
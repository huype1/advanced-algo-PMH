declare type WeightedAdjacencyMatrix = number[][]; // A number means weight
export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);
    //initialize the first vertex
    seen[source] = true;
    const q: number[] = [source];
    do {
        //deque but need to declare as number because it can be undefined(typescript issue)

        const curr = q.shift() as number;
        if (curr === needle) {
            break;
        }
        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; ++i) {
            if (adjs[i] === 0) {
                continue;
            }
            if (seen[i]) {
                continue;
            }
            seen[i] = true;
            prev[i] = curr;
            q.push(i);
        }
    } while (q.length);
    //if there is no path because there are no parent in the path
    if (prev[needle] === -1) {
        return null;
    }

    //build it backward until reaching -1
    let curr = needle;
    const out: number[] = [];
    //while there are still parent of the vertex
    while (prev[curr] !== -1) {
        out.push(curr);
        //set it to parent
        curr = prev[curr];
    }
    //need to add source because the parent of source is -1 therefore it broke the loop
    return [source].concat(out.reverse());
}

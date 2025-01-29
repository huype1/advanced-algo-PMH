
type Point = {
    x: number;
    y: number;
}
//left right down up
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
]
function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  if (curr.x < 0 || curr.x >= maze[0].length
    || curr.y < 0 || curr.y >=maze.length
  ) {
    return false;
  } 

  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }
  if (seen[curr.y][curr.x]) {
    return false;
  }

  seen[curr.y][curr.x] = true;
  path.push(curr);

  for (let i = 0; i < dir.length; ++i) {
    const [x, y] = dir[i];
    if (walk(maze, wall, {
      x: curr.x + x,
      y: curr.y + y
    }, end, seen, path)) {
      return true;
    }
  }

  path.pop();
  return false;
}
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = []

  for (let i = 0; i < maze.length; ++i) {
    seen.push(new Array(maze[i].length).fill(false));
  }
  walk(maze, wall, start, end, seen, path);
  return path;
}

// test("maze solver", function () {
//     const maze = [
//         "xxxxxxxxxx x",
//         "x        x x",
//         "x        x x",
//         "x xxxxxxxx x",
//         "x          x",
//         "x xxxxxxxxxx",
//     ];

//     const mazeResult = [
//         { x: 10, y: 0 },
//         { x: 10, y: 1 },
//         { x: 10, y: 2 },
//         { x: 10, y: 3 },
//         { x: 10, y: 4 },
//         { x: 9, y: 4 },
//         { x: 8, y: 4 },
//         { x: 7, y: 4 },
//         { x: 6, y: 4 },
//         { x: 5, y: 4 },
//         { x: 4, y: 4 },
//         { x: 3, y: 4 },
//         { x: 2, y: 4 },
//         { x: 1, y: 4 },
//         { x: 1, y: 5 },
//     ];

//     // there is only one path through
//     const result = maze_solver(maze, "x", { x: 10, y: 0 }, { x: 1, y: 5 });
//     expect(drawPath(maze, result)).toEqual(drawPath(maze, mazeResult));
// });

// function drawPath(data: string[], path: Point[]) {
//     const data2 = data.map((row) => row.split(''));
//     path.forEach((p) => {
//         if (data2[p.y] && data2[p.y][p.x]) {
//             data2[p.y][p.x] = '*';
//         }
//     });
//     return data2.map(d => d.join(''));
// }


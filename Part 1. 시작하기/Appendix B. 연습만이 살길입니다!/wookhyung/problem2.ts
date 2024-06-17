function range(start: number, end: number): number[];
function range(start: number): (end: number) => number[];
function range(start: number, end?: number): number[] | ((end: number) => number[]) {
  if (end === undefined) {
    return (end: number) => {
      if (end < start) return [];
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };
  }
  if (end < start) return [];
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

console.log(range(3, 3)); // [3]
console.log(range(3, 8)); // [3, 4, 5, 6, 7, 8]
console.log(range(3, 0)); // []

const start3 = range(3);
const start4 = range(4);

console.log(start3(3)); // [3]
console.log(start3(8)); // [3, 4, 5, 6, 7, 8]
console.log(start3(0)); // []

console.log(start4(6)); // [4, 5, 6]

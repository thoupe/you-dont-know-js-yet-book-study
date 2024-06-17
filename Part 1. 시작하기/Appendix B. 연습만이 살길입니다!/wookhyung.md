## B.1 비교 연습하기

```tsx
type StartTime = `${string}:${string}`;
type EndTime = `${string}:${string}`;

function scheduleMeeting(startTime: StartTime, endTime: EndTime, durationMinutes: number): boolean {
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);

  const start = startHour * 60 + startMinute;
  const end = endHour * 60 + endMinute;

  return end - start >= durationMinutes;
}

const dayEnd = '17:45';

scheduleMeeting('07:00', dayEnd, 30); // true

```

## B.2 클로저 연습하기

```tsx
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
```

## B.3 프로토타입 연습하기

```tsx
function randMax(max: number) {
  return Math.trunc(1e9 * Math.random()) % max;
}

const reel = {
  symbols: ['♠', '♥', '♦', '♣', '☺', '★', '☾', '☀'],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

const slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    for (const reel of this.reels) {
      reel.spin();
    }
  },
  display() {
    const lines: string[] = [];
    for (let i = 0; i < 3; i++) {
      const symbols = this.reels.map((reel) => reel.symbols[reel.position]);
      lines.push(symbols.join(' | '));
    }

    return lines.join('\n');
  },
};

slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

slotMachine.spin();
slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★
```

## B.4 모범 답안

- https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apB.md#suggested-solutions

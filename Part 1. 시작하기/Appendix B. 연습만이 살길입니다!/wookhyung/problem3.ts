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

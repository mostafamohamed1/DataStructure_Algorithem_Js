// Data structure

// syntax Class

class Student {
  constructor(fName, lName, year) {
    this.fName = fName;
    this.lName = lName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.fName} ${this.lName}`;
  }
  markLate() {
    this.tardies++;
    return `${this.fName} ${this.lName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calcAverage() {
    let sum = this.scores.reduce((acc, val) => acc + val, 0);
    return sum / this.scores.length;
  }
}

const emily = new Student("Emily", "Schmedtmann", 3);
const michel = new Student("Michel", "Tomthy", 3);

console.log(emily, michel);

console.log(emily.markLate());
console.log(michel.fullName());
console.log(emily.addScore(30));
console.log(emily.addScore(40));
console.log(emily.addScore(36));
console.log(emily.calcAverage());

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));

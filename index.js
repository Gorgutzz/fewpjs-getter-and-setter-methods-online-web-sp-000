// Add your Circle class here
const pi = Math.PI

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return `${this.radius} says ${this._phrase || 'squawk'}`;
  }

  get circumference() {
    return `${this.radius} says ${this._phrase || 'squawk'}`;
  }

  get area() {
    return `${this.radius} says ${this._phrase || 'squawk'}`;
  }

  set phrase(phrase) {
    this._phrase = phrase;
  }

}

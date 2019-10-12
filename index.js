// Add your Circle class here
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

  get speak() {
    return `${this.name} says ${this._phrase || 'squawk'}`;
  }
}

class Shape {
  constructor(t, n) {
    this.type = t;
    this.name = n;
  }

  toString() {
    return 'Shape (' + this.type + '): ' + this.name;
  }

  area() {
    return 0;
  }
}

export default Shape;



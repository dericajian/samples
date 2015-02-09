import Shape from './shape.js';
import {ShapeType} from './shapetype.js';

var count = 0;

class Circle extends Shape {
  constructor(x, y, r) {
    super(ShapeType.Circle, 'Circle#' + (++count));
    this.x = x;
    this.y = y;
    this.r = r;
  }

  area() {
    return Math.PI * this.r * this.r;
  }
}

export default Circle;


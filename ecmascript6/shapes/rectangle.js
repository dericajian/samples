import Shape from './shape.js';
import {ShapeType} from './shapetype.js';

var count = 0;

class Rectangle extends Shape {
  constructor(x, y, w, h) {
    super(ShapeType.Rectangle, 'rectangle#' + (++count));
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  area() {
    return this.w * this.h;
  }
}

export default Rectangle;


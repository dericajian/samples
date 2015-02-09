/**
* Demostrate class usage via point sample.
* To run it, you need to turn on v8 harmony
*    $ node --harmony point.js
*
* If failed, maybe you need to install traceur (by Google)
*    $ sudo npm install -g traceur
*    $ traceur point.js
*/

"use strict";

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return 'point (' + this.x + ', ' + this.y + ')';
  }
}

class ColorPoint extends Point {
  constructor(x, y, c) {
    super(x, y);
    this.color = c;
  }

  toString() {
    return super() + ' ' + this.color;
  }
}

var pt = new Point(10, 20);
var pt2 = new ColorPoint(11, 21, 'red');
console.log(pt.toString());
console.log(pt2);   // implicitly call pt2.toString()


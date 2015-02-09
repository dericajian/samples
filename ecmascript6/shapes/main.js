import Rectangle from './rectangle.js';
import Circle from './circle.js';
import {util} from './util.js';

var rect1 = new Rectangle(4, 6, 100, 120);
var circle1 = new Circle(8, 10, 98);
var rect2 = new Rectangle(14, 16, 40, 25);
var circle2 = new Circle(18, 11, 78);

util.printObject(rect1);
util.printObject(circle1);
util.printObject(rect2);
util.printObject(circle2);

util.printArea(rect1);
util.printArea(circle1);
util.printArea(rect2);
util.printArea(circle2);


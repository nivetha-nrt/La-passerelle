
import { Rectangle }  from './classes/Rectangle.js';
import { Renderer }   from './classes/Renderer.js';
import { Circle }     from './classes/Circle.js';
import { Square }     from './classes/Square.js';
import { Triangle }   from './classes/Triangle.js';



let renderer = new Renderer('zone-dessin');


renderer.setup();



let rectangle = new Rectangle( 10, 10, 250, 63,('lightblue') );
let circle = new Circle( 400, 110, 100, 0, Math.PI*2);
let square = new Square(10, 100, 200);
let triangle = new Triangle(250, 200, 500, 330, 300, 350);

rectangle.setBorderColor('black');

renderer.addShape(rectangle);
renderer.addShape(circle);
renderer.addShape(square);
renderer.addShape(triangle);

renderer.clearCanvas('white');
renderer.refresh();





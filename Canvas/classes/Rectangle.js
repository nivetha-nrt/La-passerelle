
import { Point } from './Point.js';
import { Shape } from './Shape.js';
 

export class Rectangle extends Shape
{
    constructor(x, y, width, height, bgColor, borderColor)
    {   
        super(bgColor, borderColor);

        this.location       = new Point(x, y);
        this.width          = width;
        this.height         = height;

        
    }

    
    draw(renderer)
    {

        renderer.context.strokeStyle = this.borderColor;
        renderer.context.strokeRect
        (
            this.location.x, 
            this.location.y, 
            this.width, 
            this.height
        );

        renderer.context.fillStyle = this.bgColor;
        renderer.context.fillRect
        (
            this.location.x, 
            this.location.y, 
            this.width, 
            this.height
        );
    }
}

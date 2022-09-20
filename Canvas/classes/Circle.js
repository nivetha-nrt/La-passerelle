
import { Point } from './Point.js';
import { Shape } from './Shape.js';



export class Circle extends Shape
{
    constructor(x, y, radius, startAngle, endAngle, borderColor, bgColor)
    {
        super(bgColor, borderColor);
        
        this.location           = new Point(x, y);
        this.radius             = radius;
        this.startAngle         = startAngle;
        this.endAngle           = endAngle;
        this.bgColor            = bgColor
    }



    draw(renderer)
    {
        renderer.context.beginPath();
        renderer.context.arc
        (
            this.location.x,
            this.location.y, 
            this.radius,
            this.startAngle,
            this.endAngle
        );

        renderer.context.fillStyle = this.bgColor
        renderer.context.fill();
        renderer.context.stroke();
    }

}
import { Point } from "./Point.js";
import { Shape } from "./Shape.js";

export class Triangle extends Shape 
{
    constructor(x1, y1, x2, y2, x3, y3, bgColor, borderColor)
    {
        super(bgColor, borderColor);

        this.locations1      = new Point(x1, y1)
        this.locations2      = new Point(x2, y2), 
        this.locations3      = new Point(x3, y3);
    }



draw(renderer)
{
    renderer.context.beginPath();      
    renderer.context.moveTo(this.locations1.x, this.locations1.y);   
    renderer.context.lineTo(this.locations2.x, this.locations2.y);  
    renderer.context.lineTo(this.locations3.x, this.locations3.y); 
    renderer.context.closePath();
    renderer.context.fill(); 
    renderer.context.stroke();     
}

}

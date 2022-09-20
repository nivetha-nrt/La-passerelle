
import { Rectangle } from './Rectangle.js'


export class Square extends Rectangle
{
    constructor(x, y, size, borderColor, bgColor)
    {
        super(x, y, size, size, borderColor, bgColor);
    }
}
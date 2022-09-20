

export class Shape
{
    constructor(bgColor, borderColor)
    {
        this.bgColor        = bgColor;
        this.borderColor    = borderColor;
    }

    setBgColor(bgColor)
    {
      this.bgColor = bgColor;
    }

    setBorderColor(borderColor)
    {
        this.borderColor = borderColor;
    }
}
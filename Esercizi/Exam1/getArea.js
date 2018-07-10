function getArea(sides)
{
    var area;

    if(sides.length != 2)
    {
        area=-1;
    }
    else if(isNaN(sides[0])|| isNaN(sides[1]))
    {   
        area=-1;        
    }
    else if(sides[0] < 0 || sides[1] < 0)
    {
        area=-1;
    } 
    else
    {
        area= (sides[0] * sides[1]);
    }
    return area;
}

module.exports = getArea;
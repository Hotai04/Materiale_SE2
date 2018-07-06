//1
/*function reverse(v)
{
    v = v +"";
    var s ="";
    for(var i = v.length; i >=0; i--)
    {
        s += v.charAt(i);
    }
    return s;
}

console.log(reverse(32243));
//5
function upperChar(s)
{
    var upper=false;
    var upperS = '';
    var c = '';
    for(var i = 0; i < s.length; i++)
    {
        c = s.charAt(i);
        //console.log("C "+ c);
        if(c == ' ')
        {
            upper=true;
        }
        else if(upper)
        {
            c = c.toLocaleUpperCase();
            upper = false;
        }
        upperS += c;
        //console.log(upperS);
    }
    return upperS;
}

console.log(upperChar("the quick brown fox"));

//7 
function countVowels(s)
{
    var vowels = 'aeiouAEIOU';
    var vowelsCount = 0;
    for(var i = 0; i < s.length; i++)
    {
        if(vowels.indexOf(s.charAt(i))!= -1)
        {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

console.log(countVowels("the quick brown fox"));

//9
function getType(v)
{
    return (typeof v);
}

console.log( getType(12));
console.log( getType('w3resource'));
console.log( getType(false));
//11
function get2ndMinMax(a)
{
    a.sort();
    return a[1] + " " + a[a.length-2];
}
console.log(get2ndMinMax([1,2,3,4,5]));
*/
//13
function divisori(v)
{
    var div = [];
    for(var i = 1; i <=v ; i++)
    {
        if(v % i == 0)
        {
            div.push(i + "");
        }
    }
    return div;
}

console.log(divisori(15));  // [1,3,5,15] 
console.log(divisori(16));  // [1,2,4,8,16] 
console.log(divisori(17));  // [1,17]
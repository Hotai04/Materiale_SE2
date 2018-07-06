// //1
// var d = new Date();
// console.log('Today is ' +d.getDay());
// var mattPom;
// if( d.getHours() < 12)
// {
//   mattPom = 'AM';
// }
// else
// {
//   mattPom = 'PM';
// }
// console.log('Current time is: '+ d.getHours() +' ' +mattPom +' : '+ d.getMinutes()+ ' : ' + d.getSeconds());
// //2
// console.log(d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear());
// //5
// var str = 'w3resource';
// var rotate = '';
// for(var i=str.length; i >= 0; i--)
// {
//    rotate += str.charAt(i);
// }
// console.log(rotate);
// //7
// var date;
// for(var i=2014; i <= 2050; i++)
// {
//   date = new Date(i, 0, 1);
//   if(date.getDay() == 0)
//   {
//     console.log('1st January is being a Sunday on '+ date.getFullYear());
//   }
// }
//9
// var today = new Date();
// console.log(today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear());
// var christmas;
// if(today.getMonth > 12 && today.getDate()> 25)
// {
//   christmas = new Date(today.getFullYear() +1, 11, 25);
// }
// else
// {
//   christmas = new Date(today.getFullYear(), 11, 25);
// }
// console.log(christmas.getDate() + '/' + christmas.getMonth() + '/' + christmas.getFullYear());
// var daysUntilChristmas =(christmas.getTime() - today.getTime())/(1000*60*60*24);
// console.log(Math.floor(daysUntilChristmas));
//11
// var cels = 60;
// var far = 140;
// var convFC = 5*(far-32)/9;
// var convCF  = ((9/5)*cels) +32
// console.log('Cels -> Far :'  + convCF);
// console.log('Far -> Cels :'  + convFC);
// //13
// var var_name = 'abcd';
// var n = 120;
// this[var_name] = n;
// console.log(this[var_name])
//15
// function diff(n)
// {
//   if(n> 13)
//   {
//     console.log(Math.abs(n-13)*2);
//   }
//   else
//   {
//       console.log(n-13);
//   }
// }
// diff(15);
// diff(3);
// //17
// function diff(n)
// {
//   if(n> 19)
//   {
//     console.log(Math.abs(n-19)*3);
//   }
//   else
//   {
//       console.log(n-19);
//   }
// }
// diff(27);
// diff(13);
// //19
// function testhundred(x) {
//   return ((Math.abs(100 - x) <= 20) ||
// 	 (Math.abs(400 - x) <= 20));
// }
//
// console.log(testhundred(10));
// console.log(testhundred(90));
// console.log(testhundred(99));
// console.log(testhundred(199));
// console.log(testhundred(200));
// //21
// function pyConv(str)
// {
//   return 'Py'+str;
// }
//
// var givStr ='aaaa';
// var  pyVer = pyConv(givStr);
// console.log(pyVer);
// //23
// function switchFL(str)
// {
//   if(str.length>1)
//   {
//     console.log(str.charAt(str.length-1)+ str.substr(1,str.length-2) + str.charAt(0));
//   }
//   else {
//     {
//       console.log(str);
//     }
//   }
// }
// var givStr = 'a';
// switchFL(givStr);
// givStr = 'ab';
// switchFL(givStr);
// givStr = 'abc';
// switchFL(givStr);
// //25
// function mult3Or7(v)
// {
//   if(v%3==0 || v%7==0)
//   {
//     console.log(true)
//   }
//   else
//   {
//       console.log(false);
//   }
// }
//
// mult3Or7(12);
// mult3Or7(14);
// mult3Or7(10);
// mult3Or7(11);
// //27
// function startsWithJava(s)
// {
//   var check;
//   if( s.length < 4)
//   {
//     check = false
//   }
//   else
//   {
//       if(s.startsWith('Java'))
//       {
//         check = true
//       }
//       else
//       {
//         check = false;
//       }
//   }
//   return check;
// }
//
// console.log(startsWithJava("JavaScript"));
// console.log(startsWithJava("Java"));
// console.log(startsWithJava("Python"));
//29
// function checkRange(v1,v2,v3)
// {
//   var check;
//   if( v1 >= 50 && v1 <= 99)
//   {
//     check = true;
//   }
//   else if( v2 >= 50 && v2 <= 99)
//   {
//     check = true;
//   }
//   else if( v3 >= 50 && v3 <= 99)
//   {
//     check = true;
//   }
//   else
//   {
//     check = false;
//   }
//   return check;
// }
// console.log(checkRange(50, 90, 99));
// console.log(checkRange(5, 9, 199));
// console.log(checkRange(65, 89, 199));
// console.log(checkRange(65, 9, 199));
// 31
/*function getMax(v1, v2 ,v3)
{
  var max;
  if(v1 > v2 && v1 > v3)
  {
    max=v1;
  }
  else if( v2 > v1 && v2 > v3)
  {
    max= v2;
  }
  else
  {
    max = v3;
  }
  return max;
}

console.log(getMax(1,0,1));
console.log(getMax(0,-10,-20));
console.log(getMax(1000,510,440));

//33
function checkRange(v1, v2)
{
  if( (v1 >= 40) && (v1 <= 60) && (v2 >= 40) && (v2 <= 60) )
  {
    return 'Range [40,60]';
  }
  else if( (v1 >= 70) && (v1 <= 100) && (v2 >= 70) && (v2 <= 100) )
  {
    return 'Range [70,100]';
  }
  else
  {
    return 'error';
  }
}
console.log(checkRange(44, 56));
console.log(checkRange(70, 95));
console.log(checkRange(50, 89));

//35
function count2or4Char(s, c)
{
  var count = 0;
  for(var i =0; i< s.length; i++)
  {
    if(s.charAt(i)  == c)
    {
      count++;
    }
  }
  if(count == 2 || count == 4)
  {
    return true;
  }
  else
  {
    return false;
  }
}

console.log(count2or4Char("Python", "y"));
console.log(count2or4Char("JavaScript", "a"));
console.log(count2or4Char("Console", "o"));
*/
//37
/*function lowerOrUpperCase(s)
{
  var newS;
  if (s.length >= 3)
  {
    newS = s.substr(0,3).toLocaleLowerCase() + s.substr(3, s.length-1);
  }
  else
  {
    newS = s.toLocaleUpperCase();
  }
  return newS;
}
console.log(lowerOrUpperCase("Python"));
console.log(lowerOrUpperCase("Py"));
console.log(lowerOrUpperCase("JAVAScript"));

//43
function checkRMValue(v1,v2,v3)
{
  var s1 = v1.toString();
  var s2 = v2.toString();
  var s3 = v3.toString();
  if(s1.charAt(s1.length-1) == s2.charAt(s2.length-1) &&
    s1.charAt(s1.length-1) == s3.charAt(s3.length-1))
    {
      return true;
    }
  else
  {
    return false;
  }
}

console.log(checkRMValue(22,32,42));
console.log(checkRMValue(102,302,2));
console.log(checkRMValue(20,22,45));

//49
function changeAlpChar(s)
{
  var str='';
  for(var i = 0; i < s.length; i++)
  {
    str +=String.fromCharCode((s.charCodeAt(i) + 1));
  }
  return str;
}

console.log(changeAlpChar("PYTHON"));
console.log(changeAlpChar("W3R"));
console.log(changeAlpChar("php"));

//51
function hourAndMin(t)
{
  var h = t / 60;
  var m = t % 60;
  return Math.floor(h) + ':' + Math.floor(m);
}

console.log(hourAndMin(71));
console.log(hourAndMin(450));
console.log(hourAndMin(1441));

//53
function sep3Char(s)
{
  var cChar= 0;
  var countSep=0;
  var begin = false;
  for(var i = 0; i < s.length; i++)
  {
    //console.log('Check '+ s.charAt(i));
    //console.log(' Begin '+ begin);
    if(begin)
    {
      //console.log('Count?');
      if(s.charAt(i) == 'b' && cChar ==3)
      {
        //console.log('End ' +s.charAt(i));
        countSep+=1;
        begin = false;

      }
      else
      {
        cChar+=1;
        //console.log('Char count '+ cChar);
      }
    }
    if( !begin && s.charAt(i) == 'a')
    {
      begin = true;
      //console.log('Start ' + s.charAt(i));
      cChar = 0;
    }

  }
  if( countSep >=1)
  {
    return true;
  }
  return false;
}

console.log(sep3Char("Chainsbreak"));
console.log(sep3Char("pane borrowed"));
console.log(sep3Char("abCheck"));

//55
function equalPT(s)
{
  var pCounter;
  var tCounter;
  for(var i=0; i< s.length; i++)
  {
    if(s.charAt(i) == 'p')
    {
      pCounter++;
    }
    if(s.charAt(i) == 't')
    {
      tCounter++;
    }
  }
  return pCounter == tCounter;
}

console.log(equalPT("paatpss"));
console.log(equalPT("paatps"));

//59
function extractEvenHalf(s)
{
  if(s.length % 2 == 0)
  {
    var middle = (s.length)/2;
    return s.substr(0, middle);
  }
  else
  {
    return s;
  }
}
console.log(extractEvenHalf("Python"));  
console.log(extractEvenHalf("JavaScript")); 
console.log(extractEvenHalf("PHP"));

//63
function createSubStr(s)
{
  if( s.length % 2 != 0)
  {
    var middle = Math.floor(s.length /2);
    return s.charAt(middle-1) + s.charAt(middle) + s.charAt(middle+1);
  }
  else
  {
    return s;
  }
}

console.log(createSubStr('abcdefg'));
console.log(createSubStr('HTML5'));
console.log(createSubStr('Python'));
console.log(createSubStr('PHP'));
console.log(createSubStr('Exercises'));

//67
function notPFirstLast(s)
{
  var sNP = s;
  if(s.charAt(0) == 'P' )
  {
    sNP = s.substr(1,s.length-1);
  }
  //console.log('Last P: '+sNP.charAt(sNP.length-1));
  if(sNP.charAt(sNP.length-1) == 'P' )
  {
    //console.log('Last char: '+sNP.charAt(sNP.length-2));
    sNP = sNP.substr(0,sNP.length-1);
  }
  return sNP;
}
console.log(notPFirstLast("PythonP"));
console.log(notPFirstLast("Python"));
console.log(notPFirstLast("JavaScript"));

//85
function sumOddEvenPos(a)
{
  var sumOdd= 0;
  var sumEven= 0;
  var sumArray = new Array();
  if(a.length == 1)
  {
    sumArray[0] = a[0];
    sumArray[1] = 0;
  }
  else if (a.length == 2)
  {
    sumArray[0] = a[0];
    sumArray[1] = a[1];
  }
  else
  {
    for(var i=0; i < a.length; i++)
    {
      if(i % 2 == 0)
      {
        sumOdd+= a[i];
      }
      else
      {
        sumEven += a[i];
      }
    }
    sumArray[0] = sumOdd;
    sumArray[1] = sumEven;
  }
  return sumArray;
}

console.log(sumOddEvenPos([1, 2, 3, 4, 5, 6]))
*/
//91
function maxConsSum(a, k)
{
  var max = 0;
  var sum = 0;
  for(var i = 0; i < a.length; i++)
  {
    sum=a[i];
    for(var j=1; j < k; j++)
    {
      sum+= a[i+j];
    }
    if(sum >= max)
    {
      max = sum;
    }
  }
  return max;
}

console.log(maxConsSum([1, 2, 3, 14, 5], 2));
console.log(maxConsSum([2, 3, 5, 1, 6], 3));
console.log(maxConsSum([9, 3, 5, 1, 7], 2));
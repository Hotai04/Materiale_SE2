//ES 1
console.log('hello');
//ES 2
var example = 'some string';
console.log(example);
//ES 3
var someString = 'this is a string';
console.log(someString);
//ES 4
var example = 'example string';
console.log(example.length);
//ES 5
var pizza = 'pizza is alright';
pizza = pizza.replace('alright', 'wonderful');
console.log(pizza);
//ES 6
var example = 123456789;
console.log(example);
//ES 7
var roundUp = 1.5;
var rounded = Math.round(roundUp);
console.log(rounded);
//ES 8
var n = 128;
console.log(n.toString());
//ES 9
var fruit = 'orange';
if( fruit.length > 5)
{
	console.log("The fruit name has more than five characters.");
}
else
{
	console.log("The fruit name has five characters or less.");
}
//ES 10
var total = 0;
limit = 10;
for(var i = 0; i < limit; i++)
{
	total+= i;
}
console.log(total);
//ES 11
var pizzaToppings = ['tomato sauce', 'cheese','pepperoni'];
console.log(pizzaToppings);
//ES 12
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filtered = numbers.filter(function evenNumbers(number){ return number % 2 === 0;});
console.log(filtered);
//ES 13
var food = ['apple', 'pizza', 'pear'];
console.log(food[1]);
//ES 14
var pets = ['cat', 'dog', 'rat'];
for( var i = 0; i < pets.length; i++)
{
	pets[i] = pets[i] + 's';
}
console.log(pets);
//ES 15
var pizza =
{
	toppings: ['cheese', 'sauce', 'pepperoni'],
	crust: 'deep dish',
	serves: 2
};
console.log(pizza);
//ES 16
var food = 
{
	types: 'only pizza'
};
console.log(food.types);
//ES 17
function eat(food)
{
	return food + ' tasted really good.';
}
console.log( eat('bananas'));
//ES 18
function math(a, b, c)
{
	return (b*c) + a;
}
console.log(math(53,61,67));
//ES 19
 var a = 1, b = 2, c = 3;

     (function firstFunction(){
         var b = 5, c = 6;

         (function secondFunction(){
             var b = 8;
			 console.log("a: "+a+", b: "+b+", c: "+c);

             (function thirdFunction(){
                 var a = 7, c = 9;

                 (function fourthFunction(){
                     var a = 1, c = 8;

                 })();
             })();
         })();
     })();
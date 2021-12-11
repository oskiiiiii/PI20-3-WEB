console.log('------------ Номер 1 ------------')
var city1 = {};
city1.name = "ГородN";
city1.population = 10000000;
console.log(city1);

console.log('------------ Номер 2 ------------')
var city2 = {name: "ГородМ", population: 1e6};
console.log('Название: ' + city2.name + ', Население: ' + city2.population);

console.log('------------ Номер 3 ------------')
city1.getName = city2.getName = function () { 
    return this.name; 
};
console.log(city1.getName());
console.log(city2.getName());

console.log('------------ Номер 4 ------------')
city1.exportStr = city2.exportStr = function () {
    return `name=${this.name}\npopulation=${this.population}\n`;
};
console.log(city1.exportStr());
console.log(city2.exportStr());

console.log('------------ Номер 5 ------------')
function getObj() { 
    return this;
}
city1.getCity = city2.getCity = getObj;
console.log(city1.getCity().getName() + ' ' + city1.getCity().population);
console.log(city2.getCity().getName() + ' ' + city2.getCity().population);

console.log('------------ Номер 6 ------------')
let obj = {}
obj.method1 = function() {
    return this
};
obj.method2 = function() {
    return this
};
obj.method3 = function() {
    return "метод 3"
};
console.log(obj.method1().method2().method3());

console.log('------------ Номер 7 ------------')
var d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log("d1: ", d1);
console.log("d1[6]: ", d1[6]);
console.log("d1[7]: ", d1[7]);

console.log('------------ Номер 8 ------------')
var d2 = [45, 78, 10, 3];
var sum2 = 0;
for(var i in d2) {
    sum2 += d2[i]
};
console.log(sum2);

console.log('------------ Номер 9 ------------')
var d3 = [45, 78, 10, 3];
d3[7] = 100;
var sum3 = 0;
for(var i in d3) {
    sum3 += d3[i]
} ;
console.log(sum3);

console.log('------------ Номер 10-----------')
var d4 = [45, 78, 10, 3];
function my(a, b) { 
    return b - a;
}
console.log(d4.sort(my));

console.log('------------ Номер 12-----------')
function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function plus(otherVector) {
    var x = this.x + otherVector.x;
    var y = this.y + otherVector.y;
    return new Vector(x, y);
};
Vector.prototype.minus = function minus(otherVector) {
    var x = this.x - otherVector.x;
    var y = this.y - otherVector.y;
    return new Vector(x, y);
};
Object.defineProperty(Vector.prototype, "length", {
    get: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);

console.log('------------ Номер 13-----------')
function StretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
}
function repeat(string, times) {
	let result = "";
	for (let i = 0; i < times; ++i)
		result += string;
	return result;
}
function TextCell(text) {
	this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) { return Math.max(width, line.length); }, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
	let result = [];
	for (let i = 0; i < height; ++i) {
		let line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};
StretchCell.prototype.minWidth = function() {
	return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
	return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height);
}
let sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));

console.log('------------ Номер 14-----------')
function logFive (next){
    len=next.length;
    if (len>5){
        len =5;
    }
    for (var i = 0; i < len; i++) {
        console.log(next[i]);
    }
};
function ArSeq(arr){
    logFive(arr)
};
function RangeSeq(from, to){
    let  Номерs = []
    for (let i = from; i <= to; i++) {
         Номерs.push(i)
    }
    logFive( Номерs)
};
logFive(new ArSeq([1, 2]));
logFive(new RangeSeq(100, 1000));

console.log('------------ Номер 15-----------')
let c1 = "Екатеринбург и Москва";
c1 = c1.split(" и ");
let Card = new Object();
Card.from = c1[0];
Card.to = c1[1];
Card.show = function() {
    return Card.from + " -> " + Card.to;
}
console.log(Card.show());

console.log('------------ Номер 16-----------')
class Human {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    getInfo() {
        return `${this.name} ${this.age} ${this.height}`;
    }
    get firstName() {
        return this.name;
    }
}
let humans = [new Human("Коля", 23, 180), new Human("Даша", 19, 170), new Human("Ваня", 18, 192), new Human("Петя", 45, 178), new Human("Вася", 34, 197), new Human("Джони", 40, 168), new Human("Катя", 37, 160), new Human("Петя", 29, 200), new Human("Соня", 21, 172), new Human("Женя", 25, 175)];
console.log("getInfo");
for (let i of humans)
    console.log(i.getInfo())
for (let i of humans)
    console.log(i.firstName);

console.log('------------ Номер 18-----------')
var dt1 = new Date('2045-01-01');
console.log(dt1);

console.log('------------ Номер 19-----------')
var dt2= Date.now();
console.log(dt2);

console.log('------------ Номер 20-----------')
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
console.log(daysInMonth(5, 2021));

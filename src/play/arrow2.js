const multiplier ={
numbers:[1,2,3,4,5],
multipliedBy:5,
multiply(){return this.numbers.map((number) => number*this.multipliedBy)}
}

console.log(multiplier.multiply())
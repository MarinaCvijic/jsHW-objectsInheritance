
//task 5 from Objects Homework

var person = {

	name:"Jack",
	age:32,
	married:true
}

var personClone = Object.create (person);
console.log (personClone.age)

//Task 6 from Objects Homework

var personalData = {

	name:"Jack",
	age:32,
	married:true
}

personalData.data = function (){console.log (personalData.name, personalData.age)};

personalData.data()

//Task 7 from Objects Homework

var fillObj = {};

fillObj.data = function(a,b,c){

	this.name = a;
	this.age = b;
	this.married = c;
};
fillObj.data('Peter',35,true)

console.log(fillObj)

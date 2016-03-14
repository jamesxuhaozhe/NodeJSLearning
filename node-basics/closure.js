function addToCreator (baseNumber) {
	return function (numToAdd) {
		return numToAdd + baseNumber;
	}
}

var numToAdd = addToCreator(10);
console.log(numToAdd(3));
console.log(numToAdd(9));

function closureDemo (name) {
	function greet() {
		console.log("Hello" + name);
	}
	return greet;
}

var greet = closureDemo("haozhe");

greet();
greet();
greet();
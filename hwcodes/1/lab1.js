const questionOne = function questionOne(arr) {
	// Implement question 1 here
	let arrSquared = arr.map((x) => { 
		return x*x; 
	});
	let sum = 0;
	arrSquared.forEach((value) => { 
		sum += value;
	});
	return sum;
}

const questionTwo = function questionTwo(num) { 
	// Implement question 2 here
	if(num < 1) {
		return 0;
	}
	if(num === 1) {
		return 1;
	}
	while(num > 1){
		return questionTwo(num - 1) + questionTwo(num - 2);
	}
}

const questionThree = function questionThree(text) {
	// Implement question 3 here
	let count = 0;
	for(var i = 0; i < text.length; i++){
		if(text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u' || text[i] === 'A' || text[i] === 'E' || text[i] === 'I' || text[i] === 'O' || text[i] === 'U') {
			count++;
		}
	}
	return count;
}

const questionFour = function questionFour(num) {
	// Implement question 4 here
	if(num < 0) return NaN;
	if(num === 0 || num === 1) return 1;
	while(num > 0) {
		return num * questionFour(num - 1);
	}
}

module.exports = {
	firstName: "XIN", 
	lastName: "SONG", 
	studentId: "10431021",
	questionOne,
	questionTwo,
	questionThree,
	questionFour
};

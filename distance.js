// Set the letters out on a grid so we can calculate distance
var distanceBindings = {
	A: [0,1],
	B: [4,0],
	C: [2,0],
	D: [2,1],
	E: [2,2],
	F: [3,1],
	G: [4,1],
	H: [5,1],
	I: [7,2],
	J: [6,1],
	K: [7,1],
	L: [8,1],
	M: [6,0],
	N: [5,0],
	O: [8,2],
	P: [9,2],
	Q: [0,2],
	R: [3,2],
	S: [1,1],
	T: [4,2],
	U: [6,2],
	V: [3,0],
	W: [1,2],
	X: [1,0],
	Y: [5,2],
	Z: [0,0],
	0: [9,3],
	1: [0,3],
	2: [1,3],
	3: [2,3],
	4: [3,3],
	5: [4,3],
	6: [5,3],
	7: [6,3],
	8: [7,3],
	9: [8,3],
	"-": [10,3],
	"=": [11,3],
	";": [9,1],
	"'": [10,1],
	",": [7,0],
	".": [8,0],
	"/": [9,0]
};


// Returns the Manhattan distance (array) from p1 to p2
// p1 and p2 both being arrays with index 0=x and 1=y
function manhattanDistance(p1, p2) {
	return [(p2[0] - p1[0]), (p2[1] - p1[1])];
}

// Returns an appropriate message for how off a character is from
// the expected value using Manhattan distance
function errorFeedback(expected, input) {
	var expectedLocation = distanceBindings[expected.toUpperCase()];
	var inputLocation = distanceBindings[input.toUpperCase()];
	
	// If either is undefined, return generic error message
	if(expectedLocation == undefined || inputLocation == undefined) {
		return "Wrong key, try again";
	}
	
	// Get the Manhattan distance between the values
	var error = manhattanDistance(expectedLocation, inputLocation)
	
	// Based on the distance, figure out whether the advice should be up/down and/or left/right
	var message = "Try ";
	if(error[0] < 0) {
		message = message + "right";
	}
	else if(error[0] > 0) {
		message = message + "left";
	}
	
	if(error[1] < 0) {
		message = message + (message.length == 4 ? "up" : " and up");
	}
	else if(error[1] > 0) {
		message = message + (message.length == 4 ? "down" : " and down");
	}
	
	return message;
}
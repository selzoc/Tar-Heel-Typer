var homerow = {
	name: "Home row",
	description: "This will teach you to find the home row.",
	type: "character",
	prompts: ["First find the 'f' key - it will have a bump on it.  Place your left index finger on the 'f' key, and type an 'f'",
				"Now put your right index finger on the 'j' key, which also has a bump, and type a 'j'",
				"Now take the rest of the fingers on your left hand and place them to the left of the 'f' key.  They should be touching 'a' 's' 'd' and 'f' - type this now",
				"Now take the rest of the fingers on your right hand and place them to the right of the 'j' key.  They should be touching 'j' 'k' 'l' and 'semicolon' - type this now"],
	sequences: ["f",
				"j",
				"asdf",
				"jkl;"],
	finish: "This lesson is now over.  Great job!"
};

var leftHandDrills = {
	name: "Left hand drills",
	description: "This gives you some practice typing words with your left hand",
	prompts: ["We will practice typing words with the left hand.  First find the 'f' key - it will have a bump on it.  Place your left index finger on the 'f' key, and type an 'f'",
				"Now take the rest of the fingers on your left hand and place them to the left of the 'f' key.  They should be touching 'a' 's' 'd' and 'f' - type this now",
				"Now type that backwards - 'f' 'd' 's' 'a'",
				"Now type fad",
				"Now type dad",
				"Now type add",
				"Now type sad",
				"Let's do 'a' 's' 'd' 'f' once more"],
	sequences: ["f",
				"asdf",
				"fdsa",
				"fad",
				"dad",
				"add",
				"sad",
				"asdf"],
	finish: "This lesson is now over.  Great job!"
};

var alphabet = {
	name: "Alphabet",
	description: "This will teach you to find the letters of the alphabet on the keyboard.",
	prompts: ["First type the letter a, then continue with the alphabet until the letter z"],
	sequences: ["abcdefghijklmnopqrstuvwxyz"],
	finish: "This lesson is now over.  Great job!"
};

var lessons = {
	homerow: homerow,
	alphabet: alphabet,
	leftHandDrills: leftHandDrills
};
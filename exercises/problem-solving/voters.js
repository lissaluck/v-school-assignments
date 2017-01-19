var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

// Objective: find the percentage og each age group who voted

// Divide the voters into their respective age groups (3 separate arrays)
var youths = [];
var middleAges = [];
var seniorCitizens = [];

// loop throught the voters array and separate it into 3 separate arrays
for (var i = 0; i < voters.length; i++) {
    // Check the age
    var voter = voters[i];
    if (voter.age >= 18 && voter.age < 26) {
        youths.push(voter);
    } else if (voter.age >= 26 && voter.age < 36) {
        middleAges.push(voter);
    } else {
        seniorCitizens.push(voter);
    }
}

//console.log(youths);
//console.log(middleAges);
//console.log(seniorCitizens);

// In each age group array, count the number of those who voted
// Compare the number of those who voted to the number of people in that array (voted)

var youthVotes = 0;
var middleVotes = 0;
var seniorVotes = 0;

for (var i = 0, i < youths.length; i++) {
    if (voter.voted) {
        youthVotes++;
    }
}
for (var i = 0, i < middleAges.length; i++) {
    if (voter.voted) {
        middleVotes++;
    }
}
for (var i = 0, i < seniorCitizens.length; i++) {
    if (voter.voted) {
        seniorCitizens++;
    }
}

// Print the percentages by age group in this FormData
// 18-25: n%


var mountainClimber = {  
    name: "Bob",
    age: 31,
    favoriteClimbs: [],
    mountainClimbingFriends: [
        {
            name: "Sarah",
            age: 31,
            favoriteClimbs: [
                {
                    climbName: "Mount Everest",
                    difficulty: 10
                },
//                ... etc ...
            ]
        },
    ]
}

var whatYear = prompt("What year is it?");

var ageIncrementer = (Number(whatYear) - 2017);

console.log("The year is " + whatYear);
console.log(ageIncrementer);
console.log("Test: " + mountainClimber.name + " is " + mountainClimber.age);
console.log(mountainClimber.mountainClimbingFriends[0].name);

if (Number(whatYear) <= 2017) {
    console.log(mountainClimber.name + " is " + mountainClimber.age);
} else {
    for (i = 0; i < (mountainClimber.mountainClimbingFriends.length -= 1); i++) {
        console.log(mountainClimber.mountainClimbingFriends[i].name
                 + " is now " + (mountainClimber.mountainClimbingFriends[i].age += ageIncrementer));
    }
}

mountainClimber.mountainClimbingFriends[0].favoriteClimbs[0].altitude = 29029;

var mountPrinceton = {
    climbName: "Mount Princeton",
    difficulty: 6,
    altitude: 14196 
}

mountainClimber.mountainClimbingFriends[0].favoriteClimbs.push(mountPrinceton);

var melissa = {
    name: "Melissa",
    age: 39,
    favoriteClimbs: [
        {
            climbName: "Pikes Peak",
            difficulty: 8,
            altitude: 14114
        }
    ]
}

var bryceton = {
    name: "Bryceton",
    age: 18,
    favoriteClimbs: [
        {
            climbName: "Mount Princeton",
            difficulty: 6,
            altitude: 14196
        }
    ]
}

mountainClimber.mountainClimbingFriends.push(melissa);
mountainClimber.mountainClimbingFriends.push(bryceton);


console.log(mountainClimber.mountainClimbingFriends[0].name);
console.log(mountainClimber.mountainClimbingFriends[0].favoriteClimbs[0].altitude);
console.log(mountainClimber.mountainClimbingFriends[0].favoriteClimbs);
console.log(mountainClimber.mountainClimbingFriends[1]);
console.log(mountainClimber.mountainClimbingFriends[2]);
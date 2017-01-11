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
    ],
    ageOneYear: function () {
        age++;
        return this.age;
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

console.log(mountainClimber.age);
console.log(mountainClimber.ageOneYear);

let wins = 0
let loses = 0


function montyHall() {

   let doors = giveMeDoors()
   let choice = Math.floor(Math.random() * 3)
   let newChoice, hostChoice

   // Host Choice
   for (let i = 0; i < doors.length; i++) {
        if (doors[i].prize !== 'car' && doors[i].num !== choice) {
            hostChoice = i
        }
   }

   // Contestants New Choice
   for (let i = 0; i < doors.length; i++) {
        if (doors[i].num !== choice && doors[i].num !== hostChoice) {
            newChoice = i
        }
   }

   if (doors[newChoice].prize === 'car') {
      wins++
   } else {
      loses++
   }
}

// Creates 3 doors, fills two with goats and one with a car
function giveMeDoors() {
    let arr = new Array(3)
    let rnd = Math.floor(Math.random() * 3)
 

    for (let i = 0; i < arr.length; i++) {
        arr[i] = {num: i, prize: "goat"}
    }

    arr[rnd].prize = "car"

    return arr
}


const tests = 50000000
for (let i = 0; i < tests; i++) {
    montyHall()
}

console.log((wins / (wins + loses)) * 100)



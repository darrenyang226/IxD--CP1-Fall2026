// Grab the elements we need from the page
let checkBtn = document.getElementById("checkBtn")
let prize = document.getElementById("prize")
// The correct answer for each puzzle.
// The "name" matches the name="" on the radio buttons in index.html
let answers = [
    { name: "q1", correct: "sunflower", lock: "lock1", feedback: "feedback1" },
    { name: "q2", correct: "starfish",  lock: "lock2", feedback: "feedback2" }

]

let checkAnswers = (event) => {
    // The button is inside a <form>, so by default the page would reload.
    // This line stops that.
    event.preventDefault()
    let rightCount = 0
    let message = ""
     // Find the radio button that is checked in each group (null if none)
    let pick1 = document.querySelector("input[name='q1']:checked")
    let pick2 = document.querySelector("input[name='q2']:checked")

// Puzzle 1
    if (pick1 === null) {
        message = message + "Puzzle 1: Pick an answer first.\n"
    }
    else if (pick1.value == "sunflower") {
        message = message + "Puzzle 1: Correct!\n"
        rightCount++
    }
    else {
        message = message + "Puzzle 1: Not quite, try again.\n"
    }
    
 // Puzzle 2
    if (pick2 === null) {
        message = message + "Puzzle 2: Pick an answer first.\n"
    }
    else if (pick2.value == "starfish") {
        message = message + "Puzzle 2: Correct!\n"
        rightCount++
    }
    else {
        message = message + "Puzzle 2: Not quite, try again.\n"
    }
 
    // Show the messages inside <pre id="log">
    log.innerHTML = message
 
    // If both are right, show the prize. Otherwise keep it hidden.
    if (rightCount == 2) {
        prize.className = ""          // removes the "hidden" class
    }
    else {
        prize.className = "hidden"
    }
}

checkBtn.addEventListener("click", checkAnswers)
function handleRandom(){
    generateNumbers(Math.floor(Math.random() * 4) + 1);
}

function generateNumbers(large) {
    console.log("generating numbers");
    var randomNumbers = [];
    var numberOfNumbers = 6 - large;

    for (var i = 0; i < numberOfNumbers; i++) {
        // Generate a random number between 1 and 9
        var randomNumber = Math.floor(Math.random() * 9) + 1;
        randomNumbers.push(randomNumber);
    }

    // Choose large numbers without duplicates
    var chosenSums = chooseRandomLargeSums(large);
    for (var i = 0; i < large; i++) {
        randomNumbers.push(chosenSums[i]);
    }

    for (var i = 0; i < 6; i++) {
        console.log(randomNumbers[i]);
    }
    updateGeneratedNumbers(randomNumbers);
}
function generateTarget(){
    // Generate a random number between 1 and 999 (common range for Countdown)
    var randomNumber = Math.floor(Math.random() * 999) + 1;


    console.log("TARGET: ", randomNumber);
    // Display the random number in the target-number div
    document.getElementById('target-number').innerHTML = randomNumber;

}
function updateGeneratedNumbers(numbers) {
    document.getElementById("generatedNumbers").textContent = "6 generated numbers: " + numbers.join(', ');
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
}

function chooseRandomLargeSums(n) {
    var largeSums = [25, 50, 75, 100];
    shuffleArray(largeSums);

    var chosenSums = largeSums.slice(0, n);
    return chosenSums;
}
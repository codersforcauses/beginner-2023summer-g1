
function getCombinations(arr, length) {
    if (length === 1) {
        return arr.map((value) => [value]);
    }
    const combinations = [];
    arr.forEach((current, index) => {
        const rest = getCombinations(arr.slice(index + 1), length - 1);
        rest.forEach((comb) => {
            combinations.push([current].concat(comb));
        });
    });
    return combinations;
}

function getAllCombinations(arr) {
    let allCombinations = [];
    for (let i = 1; i <= arr.length; i++) {
        allCombinations = allCombinations.concat(getCombinations(arr, i));
    }
    return allCombinations;
}

function getPermutations(arr) {
    if (arr.length <= 1) {
        return [arr];
    }
    const permutations = [];
    arr.forEach((current, index, originalArray) => {
        const rest = originalArray.slice(0, index).concat(originalArray.slice(index + 1));
        const restPermutations = getPermutations(rest);
        restPermutations.forEach((perm) => {
            permutations.push([current].concat(perm));
        });
    });
    return permutations;
}

function getAllPermutationsOfCombinations(arr) {
    const allCombinations = getAllCombinations(arr);
    return allCombinations.map(combination => getPermutations(combination)).flat();
}

// Example usage
const numbers = [1, 2, 3, 4];
console.log(getAllCombinations(numbers));
console.log(getAllPermutationsOfCombinations(numbers));

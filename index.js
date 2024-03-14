// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    let newArray = cats.slice(); // Create a copy of the original array
    newArray.push(name);
    return newArray;
}

function prependCat(name) {
    let newArray = cats.slice(); // Create a copy of the original array
    newArray.unshift(name);
    return newArray;
}

function removeLastCat() {
    let newArray = cats.slice(); // Create a copy of the original array
    newArray.pop();
    return newArray;
}

function removeFirstCat() {
    let newArray = cats.slice(); // Create a copy of the original array
    newArray.shift();
    return newArray;
}
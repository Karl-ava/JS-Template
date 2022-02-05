function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomArrayGenerator(length, min, max) {
    let arr = [];
    for (i = 1; i <= length; i++) {
        let randomNumber = randomNumberGenerator(min, max);
        arr.push(randomNumber);
    }
    return arr;
}

function bubbleSort(array) {
    while (!sorted(array)) {
        for (i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                array.swap(i, i + 1);
            }
        }
    }
    return array;
}

function quickSort(array) {
    quickSortSplit(array, 0, array.length - 1);
    return array;
}

function quickSortSplit(array, low, high) {
    if (low < high) {
        let finalIndex = partition(array, low, high);

        quickSortSplit(array, low, finalIndex - 1);
        quickSortSplit(array, finalIndex + 1, high);
    }
}

function partition(array, low, high) {
    let pivotIndex = medianOfThree(array, low, high);
    let pivot = array[pivotIndex];
    array.swap(pivotIndex, high);

    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            array.swap(j, i);
        }
    }
    array.swap(i + 1, high);
    return i + 1;
}

function medianOfThree(array, low, high) {
    let a = randomNumberGenerator(low, high);
    let b = randomNumberGenerator(low, high);
    let c = randomNumberGenerator(low, high);
    let three = [array[a], array[b], array[c]];
    if (sorted(three)) {
        return b;
    } else if (sorted(three.swap(0, 1))) {
        return a;
    } else {
        return c;
    }
}

function sorted(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

Array.prototype.swap = function (i, j) {
    [this[i], this[j]] = [this[j], this[i]];
    return this;
};

const { performance } = require("perf_hooks");

function profile(num) {
    let total = 0;
    for (i = 0; i < num; i++) {
        let randomArray = randomArrayGenerator(10, 0, 10);

        let startTime = performance.now();

        quickSort(randomArray);

        let endTime = performance.now();
        total += endTime - startTime;
    }
    return total / num;
}

console.log(profile(10));

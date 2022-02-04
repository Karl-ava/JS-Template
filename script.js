function randomNumberGenerator(min, max){
    return Math.floor(Math.random()*(max-min)+min)
}

function randomArrayGenerator(length, min, max){
    let arr = []
    for(i=1; i<=length; i++){
        let randomNumber = randomNumberGenerator(min, max) 
        arr.push(randomNumber)
    }
    return arr
}

function bubbleSort(array){
    while(!(sorted(array))){
        for(i=0; i<array.length; i++){
            if(array[i]>array[i+1]){
                let firstElement = array[i], secondElement = array[i+1]
                array[i] = secondElement
                array[i+1] = firstElement
            }
        }
    }
    return array
}

function sorted(array){
    for(i=0; i<array.length; i++){
        if(array[i] > array[i+1]){
            return false
        }
    } 
    return true
}

let randomArray = randomArrayGenerator(20, -100, 100)
console.log(randomArray)
let sortedArray = bubbleSort(randomArray)
console.log(sortedArray)
const { max } = require("lodash");

//Sequence generator function for arrays
function range(start, stop, step){
    return  Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
} 

//09/21/2020 'Simple Array Sum'
function simpleArraySum(ar) {
    return ar.reduce((acc, currentValue) => acc + currentValue,0)
}

//09/21/2020 'Compare the Triplets'
function compareTriplets(aArray, bArray){
    let a = 0, b = 0
    for(let i = 0; i < aArray.length; i ++){
        if( aArray[i] < bArray[i] ) 
        {
            b ++
        } 
        else if( aArray[i] > bArray[i] ) 
        {
            a ++
        }
    }
    return [a,b]
}

//09/21/2020 'A Very Large Sum'
function veryLargeSum(ar) {
    return ar.reduce((acc, currentValue) => acc + currentValue,0)
}

//09/22/2020 'Diagonal Difference'
function diagonalDifference(array) {
    let diag1 = 0
    let diag2 = 0
    let length = array[0].length
    for ( let i = 0; i < length; i ++ ) {
        diag1 += array[i][i]
        diag2 += array[i][length - i - 1]
    }
    return Math.abs( diag1 - diag2 )
}
//09/22/2020 'Plus Minus'
let arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    let length = arr.length
    let posCount = 0, 
        negCount = 0, 
        zeroCount = 0

    arr.forEach(number => 
        {
        if (number > 0) {
            posCount ++
        }
        else if (number < 0) 
        {
            negCount ++
        }
        else
        {
            zeroCount ++
        }
    })
    console.log((posCount/length).toFixed(6))
    console.log((negCount/length).toFixed(6))
    console.log((zeroCount/length).toFixed(6))
}

//09-23-2020 'Staircase'
const staircase = (n) => {
    const space = ' '
    const step = '#'
    for (let i = 1; i <= n; i++) {
        console.log(`${space.repeat(n-i)}${step.repeat(i)}`)
        
    }
}

//9-24-2020 'MinMax Sum'
const MiniMaxSum = (arr) => {
    
    const minimumArr = [...arr].sort((a,b) => a - b);
    const maximumArr = [...arr].sort((a,b) => b - a);
    minimumArr.pop()
    maximumArr.pop()
    const minSum = minimumArr.reduce((acc, num) => acc + num)
    const maxSum = maximumArr.reduce((acc, num) => acc + num)
    console.log(minSum, maxSum)
}

//09-24-2020 'Operators-30 days of Code'
function solve(meal_cost, tip_percent, tax_percent) {
    const tip = meal_cost * (tip_percent/100);
    const tax = meal_cost * (tax_percent/100);    
    const totalCost = (meal_cost + tip + tax).toFixed(0);
    console.log(totalCost)

}
//9-25-2020 'Birthday Cake Candles'
function birthdayCakeCandles(candles) {
    const candlesHighestToLowest = candles.sort((a,b) => b-a)
    let candlesBlownOut = 0
    const highestCandle = candlesHighestToLowest[0]
    candlesHighestToLowest.map(candle => {
        if(candle === highestCandle){
            candlesBlownOut++
        }        
    })
    return candlesBlownOut
}
//9-26-2020 'Time Conversion'
function timeConversion(timeStr) {
    if (timeStr.includes('AM') && timeStr.split(':')[0] === '12') {
        let timeArr = timeStr.split('AM')[0].split(':')
        timeArr[0] = '00'
        const time = timeArr.join(':')
        return time

    } else if (timeStr.includes('AM') && timeStr.split(':')[0] !== '12') {
        const time = timeStr.split('AM')[0]
        return time

    } else if (timeStr.includes('PM') && timeStr.split(':')[0] === '12'){
        const time = timeStr.split('PM')[0]
        return time

    }  else {
        let timeArr = timeStr.split('PM')[0].split(':')
        timeArr[0] = String(parseInt(timeArr[0]) + 12)
        const time = timeArr.join(':')
        return time
    }
}
//9-26-2020 'Grading Students'
const gradingStudents = (grades) => {
    let roundedGrades = []    
    for(let i = 0; i< grades.length; i++){
        if (grades[i] < 38){
            roundedGrades.push(grades[i])
        } else if (((Math.ceil(grades[i]/5)*5) - grades[i]) >= 3) {            
            roundedGrades.push(grades[i])
        } else {
            roundedGrades.push(Math.ceil(grades[i]/5)*5)
        }
    }
    return roundedGrades        
}

//9-30-2020 'Let's Review'
const letsReview = (input) => {
    const evenLettersArr = [];
    const oddLettersArr = [];
    for (let i = 0; i < input.length;i++){
        if (i % 2 === 0){
            evenLettersArr.push(input[i])
        } else {
            oddLettersArr.push(input[i])
        }
    }
    return evenLettersArr.join('') + ' ' + oddLettersArr.join('')
}

//10-01-2020 'Apples and Oranges'
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesOnHouse = 0
    let orangesOnHouse = 0
    apples.forEach(apple => {
        let applePos = apple + a 
        if (applePos >= s && applePos <= t) {
            applesOnHouse ++
        }
    })
    oranges.forEach(orange => {
        let orangePos = orange + b 
        console.log(orangePos)
        if (orangePos <= t && orangePos >= s) {
            orangesOnHouse ++
        }
    })
    console.log(applesOnHouse)
    console.log(orangesOnHouse)
}

//10-02-2020 'Line Jumps'
const kangaroo = (x1,v1,x2,v2) => {
    let response
    if (x2 > x1 && v2 > v1) {
        return 'NO'
    } else {
        for(let i=1;i<5000;i++) {
            console.log(x1 + v1*i, x2 + v2*i)
            if(x1 + v1*i == x2 + v2*i){
                
                return 'YES'
            } else {
                response = 'NO'
            }
        }
        return response
    }
}

//10-08-2020 'Breaking the Records'
const breakingRecords = (scoreArr) => {
    let highRecordBrokenCount = 0,
        lowRecordBrokenCount = 0,
        highRecord = scoreArr[0],
        lowRecord = scoreArr[0]

    scoreArr.forEach(score => {
        if (score > highRecord) {
            highRecordBrokenCount++
            highRecord = score
        } else if (score < lowRecord) {
            lowRecord = score
            lowRecordBrokenCount++
        }
    })
    let brokenRecords = [highRecordBrokenCount, lowRecordBrokenCount] 
    return brokenRecords 
}

//10-16-2020 'Array Reverse'
const reverseArr = (arr) => {
    console.log(arr.reverse().join(' '))
}

//10-19-2020 'Migratory Birds'
const migratoryBirds = arr => {
    let birdHash = {
        1:0,
        2:0,
        3:0,
        4:0,
        5:0
    }

    arr.forEach
}

//10-20-2020 'Left Shift arr'

const leftShift = (arr,numberOfShifts) => {
    return [...arr.splice(numberOfShifts), ...arr.splice(0,numberOfShifts)]
}

//10-24-2020 '2D Arrays-DS'
const hourglassSum = (arr) => {
    let sum = []
    
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2;j++) {
            let pos1 = arr[i][j]
            let pos2 = arr[i][j+1]
            let pos3 = arr[i][j+2]
            let pos4 = arr[i+1][j+1]
            let pos5 = arr[i+2][j]
            let pos6 = arr[i+2][j+1]
            let pos7 = arr[i+2][j+2]
            sum.push(pos1 + pos2 + pos3 + pos4 + pos5 + pos6 + pos7); 
        }
    }
    return Math.max(...sum)
}

//11-17-2020 'Bubble Sort' (Sorting Problem)
function countSwaps(array) {
    let swaps = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++){
            let a = array[j]
            let b = array[j + 1]
            console.log(a)
            if (a > b) {
                [array[j],array[j+1]] = [b,a]
                swaps++
            }
        }
    }
    console.log(`Array is sorted in ${swaps} swaps.`) 
    console.log(`First Element: ${array[0]}`)
    console.log(`Last Element: ${array[array.length-1]}`)
}

//11-17-2020 'Mark and Toys' (Sorting Problem)
function maximumToys(prices, budget) {
    const sortedToyPrices = prices.sort((a,b) => a - b)
    let moneyLeft = budget 
    let toysPurchased = 0
    sortedToyPrices.forEach(toyPrice => {
        if (moneyLeft >= toyPrice) {
            moneyLeft -= toyPrice
            toysPurchased++
        }
    })
    return toysPurchased
}

const sockMerchant = (n, arr) => {
    const arrMap = {}
    arr.forEach(number => {
        if (!arrMap[number]) {
            arrMap[number] = 1 
        } else {
            arrMap[number]++
        }
    })
    const valuesArr = Object.values(arrMap)
    const pairs = valuesArr.map(numberSocks => Math.floor(numberSocks/2))
    const pairsSold = pairs.reduce((acc, curr) => acc + curr)
    return pairsSold
}

const countingValleys = (steps, path) => {
    let currentLevel = 0
    let numValleys = 0
    const pathArray = path.split('')
    pathArray.forEach(step => {
        if (step === 'U' && currentLevel === -1) {
            currentLevel++
            numValleys++
        } else if (step === 'U') {
            currentLevel++
        } else {
            currentLevel--
        }
    })
    return numValleys
}

const jumpingOnClouds = (clouds) => {
    let moveCount = 0 
    let position = 0
    while (position < clouds.length - 1) {
        if (clouds[position + 2] === 0) {
            moveCount++
            position+= 2
        } else {
            moveCount++
            position++
        }        
    }
    return moveCount
}

const repeatedString = (string, n) => {
    let c = 0,
        ca = 0,
        r = n % string.length

    for (let i = string.length; i-- > 0;) {
        if (string.charAt(i) == 'a') {
        ++c

        if (i < r)
            ++ca
        }
    }
    return ((n - r) / string.length * c) + ca
}

//12-6-2020 'Hash Tables: Ransom Note'
const checkMagazine = (magazine, note) => {
    const map = { };
    let replicable = true;
    for ( let i of magazine ) {
        map[i] = (map[i] || 0) + 1;
    }
    for ( let i of ransom ) {
        map[i] = (map[i] || 0) - 1;
    }
    for ( let i in map ) {
        if ( map[i] < 0 ) {
            replicable = false;
            break;
        }
    }
    console.log(replicable ? 'Yes' : 'No');
}

function arrayManipulation(n, queries) {
    
    let max = 0;
    const params = [];
    
    for(let q=0; q<queries.length; q++){
        
        const query = queries[q];
        const qstart = query[0];
        const qend = query[1];
        const qval = query[2];
        
        params.push({
            key: qstart,
            val: qval
        });
        
        params.push({
            key: qend,
            val: -qval
        });
    }    
    //sort the parameters by key
    params.sort((item1, item2) => {
        if(item1.key === item2.key){
            return item2.val - item1.val;
        }
            return item1.key - item2.key;
    });
    
    let sum = 0;    
    for(let i=0; i<params.length; i++){
        const param = params[i];
        sum += param.val;
        
        if(sum > max){
            max = sum;
        }
    }
    return max;
}


//12-10-2020 'Factorial'
const factorial = (number) => {
    const range = (start, stop, step=1) => {
        return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    }
    return range(1, number).reduce((accumulator, current) => accumulator * current)
}

//12-14-2020 'Minimum Absolute Difference in an Array
const minimumAbsoluteDifference = (array) => {
    const sortedArray = array.sort()
    let minimumDiff;

    for (let i = 0; i < sortedArray.length; i++) {
        let absoluteDiff = Math.abs(sortedArray[i + 1] - sortedArray[i])
        if (!minimumDiff || absoluteDiff < minimumDiff) {
            minimumDiff = absoluteDiff
        }
        if (minimumDiff === 0 ) {
            return minimumDiff
        }
    }
    return minimumDiff
}

const beginsWithCapitalLetter = (input) => {
    if (typeof input !== 'string' || input.charAt(0).match(/[0-9]/)) {
        return false
    }
    return input.charAt(0) === input.charAt(0).toUpperCase()
}

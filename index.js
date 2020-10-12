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
const letsReview = (string) => {
    const evenLettersArr = [];
    const oddLettersArr = [];
    for (let i = 0; i < string.length;i++){
        if (i % 2 === 0){
            evenLettersArr.push(string[i])
        } else {
            oddLettersArr.push(string[i])
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

function highestRank(arr){
    //Your Code logic should written here
    }

var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
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
    const minimum = arr.sort()
        for(let i; i < 4; i++){
            let minSum = 0
            minSum += minimum[i] 
            console.log(minSum)           
        }
        
    

    const maximum = arr.reverse()
        for(let i; i < 4; i++){
            let maxSum = 0
            maxSum += maximum[i] 
            console.log(maxSum)           
        }        
    

    console.log(`${minimum} ${maximum}`)
}

MiniMaxSum([1,2,3,4,5])

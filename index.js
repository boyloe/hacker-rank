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

09//22/2020 'Diagonal Difference'
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


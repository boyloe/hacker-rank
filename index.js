//09/21/2020 'Simple Array Sum'
function simpleArraySum(ar) {
   return ar.reduce((acc, currentValue) => acc + currentValue,0)
}
let ar = [1,2,3,4,10,11]
console.log(simpleArraySum(ar))
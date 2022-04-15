function addToZero (nums) {
    let check = false
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if((nums[i] + nums[j] == 0) && (nums[i] != nums[j])){
                check = true
            }
        }
    }
    return check
}
console.log(addToZero([1, 2, 3, -2])) //true
console.log(addToZero([1, 2, 3])) //false
console.log(addToZero([1])) //false
console.log(addToZero([])) //false
//complexity of for loop is O(N), complexity of nested for loop is O(N^2)

function hasUniqueChars(str) {
    let temp = []
    for(let i = 0; i < str.length; i++){
        if(temp.includes(str[i])){
            return false
        }
        temp.push(str[i])
    }
    return true
}
console.log(hasUniqueChars('Monday')) //true
console.log(hasUniqueChars('Moonday')) //false
// complexity of for loop is O(N) * O(1) for push but the function returns flase once it is hit, this helps the complexity because it doesn't run the entire loop if it finds non-unique char in string

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
function isPangram(str) {
    str = str.toLowerCase()
    return alphabet.every(char => str.includes(char))
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!")) //true
console.log(isPangram("I like cats, but not mice")) //false
//since .every is arr method that executes a function for each element 
//the complexity would be O(N)*O(26), not 100% sure if that's correct
function findLongestWord(arr) {
    let counter = 0
    let longest = ''
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length  > counter){
            counter = arr[i].length
            longest = arr[i]
        }
    }
    return longest.length
}
console.log(findLongestWord(["hi", "hello", "sdfgsdfgsdfg", "sgfds"])) //12
//main complexity is for loop (O(N)), this one is strict O(N) because it will go all the way in the loop no matter what since it has to check all values
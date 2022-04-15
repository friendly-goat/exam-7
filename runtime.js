const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

/*
First time running, append with the .push method was much faster
Results for the extraLargeArray
insert 1.1683017 s
append 4.014 ms

Results for the largeArray
insert 11.4039 ms
append 2.1798 ms

Results for the mediumArray
insert 500.2 μs
append 334.9 μs

Results for the smallArray
insert 113.1 μs
append 235.8 μs

Results for the tinyArray
insert 84.8 μs
append 272.5 μs

After doing some research, i found out that the complexity of push() is O(1) and the complexity of unshift() is O(n).
unshift() has to increment all the emelemnts that exist in the current array, hance why is it takes longer to work with longer arrs
push() does not have to re-index any arr values and just adds to the end
*/

function groupAdultsByAgeRange(arr) {

    return arr.reduce((acc, next)=> {
        if (acc < next.age ) {
            return {'20 and younger': acc} 
        } else {
            return '20 and younger', next 
        }
    },{})
        
    
   
    // return groupAdultsByAgeRange
}


console.log(groupAdultsByAgeRange([]));

module.exports = {groupAdultsByAgeRange}


// The function will be called with an array of objects as its argument. X
// The objects represent people, with a property `name` and a property `age`. 
// Your function should group each person 
// **over the age of 18** into age ranges. Here are a few examples:

// Example 1
// groupAdultsByAgeRange([{name: "Henry", age: 9}, {name: "John", age: 20}])
// Should result in:
// const result = { '20 and younger': [ { name: 'John', age: 20 } ] }

function groupAdultsByAgeRange(arr) {
// frst we need to filter and see who is below 18 X
// Then we need to group by age
    // we could return an array of ages 
    
    return arr.filter(el=> el.age > 18)
    .reduce((acc,next)=>{
        if (acc.age > 20) {
            return {'20 and older': acc}
        }
        // console.log(acc);
    })


    // return arr.reduce((acc, next)=> {
    //     if (next.age < 18 ) {
    //         return 
    //     } else {
    //         return 'bigger'
    //     }
    // },{})
        
    
   
    // return groupAdultsByAgeRange
}


console.log(groupAdultsByAgeRange([{ name: "pete", age: 10 },{ name: "jonas", age: 25 },{ name: 'John', age: 40 }]));

module.exports = {groupAdultsByAgeRange}


// - `20 and younger`
//     - `21-30`
//     - `31-40`
//     - `41-50`
//     - `51 and older`

// it("filters out people under the age of 18", function() {
//     const groupAdultsByAgeRange = require("./transform").groupAdultsByAgeRange
//     const grouping = groupAdultsByAgeRange([
//       { name: "pete", age: 10 },
//       { name: "dove", age: 17 },
//     ])



// The function will be called with an array of objects as its argument. X
// The objects represent people, with a property `name` and a property `age`. 
// Your function should group each person 
// **over the age of 18** into age ranges. Here are a few examples:

// Example 1
// groupAdultsByAgeRange([{name: "Henry", age: 9}, {name: "John", age: 20}])
// Should result in:
// const result = { '20 and younger': [ { name: 'John', age: 20 } ] }
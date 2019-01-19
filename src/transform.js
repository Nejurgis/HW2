
function groupAdultsByAgeRange(arr) {
    if(arr) {
        arr.reduce((acc, next)=> {
            console.log('reduce')
            return {}
        },{})
        
    }  else {
        console.log('result')
    }
   
    // return groupAdultsByAgeRange
}


console.log (groupAdultsByAgeRange());

module.exports = {groupAdultsByAgeRange}
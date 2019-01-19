function groupAdultsByAgeRange(arr) {
    return arr.filter(el => el.age >= 18)
        .reduce((acc, next) => {
            if (next.age <= 20) {
                if (!acc["20 and younger"]) {
                    acc["20 and younger"] = []
                }
                acc["20 and younger"].push(next)
                return acc
            }

            if (next.age >= 21 && next.age <= 30) {
                if (!acc['21-30']) {
                    acc['21-30'] = []
                }
                acc['21-30'].push(next)
                return acc
               
            }
            if (next.age >= 31 && next.age <= 40) {
                if (!acc['31-40']) {
                    acc['31-40'] = []
                }
                acc['31-40'].push(next);
                return acc
            }
            if (next.age >= 41 && next.age <= 50) {
                if (!acc['41-50']) {
                    acc['41-50'] = []
                }
                acc['41-50'].push(next);
                return acc
            }
            if (next.age >= 51) {
                if (!acc['51 and older']) {
                    acc['51 and older'] = []
                }
                acc['51 and older'].push(next);
                return acc
            }
            return acc
        }, {})

}

console.log(groupAdultsByAgeRange([
    { name: "pete", age: 10 },
    { name: "dove", age: 17 },
    { name: "dave", age: 18 },
    { name: "hall", age: 19 },
    { name: "donn", age: 20 },
    { name: "trey", age: 21 },
    { name: "hann", age: 29 },
    { name: "chew", age: 30 },
    { name: "cloe", age: 31 },
    { name: "dart", age: 39 },
    { name: "this", age: 40 },
    { name: "dame", age: 41 },
    { name: "henk", age: 49 },
    { name: "anna", age: 50 },
    { name: "olga", age: 51 },
    { name: "bert", age: 52 },
    { name: "oldd", age: 120 },
  ]))




module.exports = {
    groupAdultsByAgeRange
}


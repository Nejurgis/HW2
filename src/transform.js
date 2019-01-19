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

module.exports = {
    groupAdultsByAgeRange
}


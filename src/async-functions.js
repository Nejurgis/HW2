// This one was a bit tricky since I was sick on the day
// we were taught about it..

function giveItBackLater(val, callback) {
    setTimeout(() => {
        callback(val)
    }, 1400);
}

function addSomePromises(somePromise) {
    return new Promise(function(resolve,reject) {

    })
}

function promiseToGiveItBackLater(value) {
    return new Promise((resolve, reject) => {
        resolve(value)
    })
}

// giveItBackLater().then(function(result){
//     return (result)
// })

console.log(promiseToGiveItBackLater());
module.exports = {
    giveItBackLater,
    addSomePromises,
    promiseToGiveItBackLater
}


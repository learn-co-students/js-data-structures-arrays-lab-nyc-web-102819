// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name) {
    drivers.push(name)
}
function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}
function destructivelyRemoveLastDriver() {
    drivers.pop()
}
function destructivelyRemoveFirstDriver() {
    drivers.shift()
}
function appendDriver(name) {
    return drivers.concat(name)
}
function prependDriver(name) {
    let new_ar = [name]
    return new_ar.concat(drivers)
}
function removeLastDriver() {
    return drivers.slice(0, -1)
}
function removeFirstDriver() {
    return drivers.slice(1)
}

let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    return drivers.push(name);
}

function destructivelyPrependDriver(name) {
    return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
    return drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
    return drivers.shift(name);
}

function appendDriver(name) {
    let newDriversArray = [...drivers, name];
    return newDriversArray;
}

function prependDriver(name) {
    let newDriversArray = [name, ...drivers];
    return newDriversArray;
}

function removeLastDriver() {
    let newDriversArray = drivers.slice(0, - 1);
    return newDriversArray;
}

function removeFirstDriver() {
    let newDriversArray = drivers.slice(1)
    return newDriversArray;
}

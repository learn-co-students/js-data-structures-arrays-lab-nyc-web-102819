let drivers = ["Milo", "Otis", "Garfield"];

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
  let driversNew = [...drivers, name]
  return driversNew
}

function prependDriver(name) {
  let driversNew = [name, ...drivers]
  return driversNew
}

function removeLastDriver() {
  let driversNew = drivers.slice(0, -1)
  return driversNew
}

function removeFirstDriver() {
  let driversNew = drivers.slice(1)
  return driversNew
}

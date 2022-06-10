let drivers = [{name : 'tony', hometown : 'new york'}, {name : 'bobby', hometown: 'bronx'}, 'sally', 'gregory', 'stevie', 'paulie'];

let findMatching = (array, string) => {
    let newArray = array.filter( element =>{
        return (element.toLowerCase() === string.toLowerCase())
    })
    return newArray
}

let fuzzyMatch = (array, letter) => {
    let newArray = array.filter( element => {
        return (element.slice(0, letter.length) === letter)
    })
    return newArray;
}

let matchName = (array, str) => {
    let newArray = array.filter( element => {
        return (element.name === str)
    })
    return newArray
}

console.log(matchName(drivers, 'bobby'))
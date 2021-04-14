// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const newArray = []
    arr.forEach((booger) => {
        newArray.push(booger.name)
    })
    console.log(newArray)
    return newArray;
}
/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const newArray = []
    arr.forEach((booger) => {
        newArray.push(booger.type)
        newArray.reverse(booger.type)

    })

    return newArray;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const newArray = []
    arr.forEach((booger) => {
        // booger['nombre'] = booger['name']
        //`booger['tipo'] = booger['type']
        let espanol = { nombre: booger.name, tipo: booger.type }

        newArray.push(espanol)
    })




    return newArray;
}

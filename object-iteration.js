// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    // const someObjectUpper = Object.keys(someObject)
    // Initialize new Object
    const newObject = {}
    // console.log(Object.keys(someObject));
    //loop thorough someObject using Object.entries
    for (let key in someObject) {
        let booger = someObject[key]
        console.log(booger)
        let upperCase = key.toUpperCase()
        console.log(upperCase)
        newObject[upperCase] = booger
    }
    //set the key to the value
    //making key to upper care.
    //Object.key.toUpperCase




    return newObject;
}

/*
Output:
`8truckvroom`
or
`truckvroom8`
or
`truck8vroom`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    return '';
}


/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    return [];
}

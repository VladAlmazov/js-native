let students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// const mapFn = st => ({name: st.name})

// const mapFn = st => {
//     let name = st.name;
//     return name.length < 4 ? name + '!' : name;
// }

const studentsNames = students.map(st => ({name: st.name})); //если хотим вернуть объект
console.log(studentsNames);

function map(array, func) {
    const newArr = [];
    // newArr[0] = func(array[0])
    // newArr[1] = func(array[1])
    // newArr[2] = func(array[2])
    for (let i = 0; i < array.length; i++) {
        newArr[i] = func(array[i])
    }
    ;
    return newArr;
}

console.log(map(students, st => ({name: st.name})));

function filter(array, func) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            newArr.push(array[i])
        }
    }
    return newArr;
}

function getMarried(st) {
    return st.isMarried;
}

console.log(students.filter(getMarried));
console.log(filter(students, getMarried))

function find(array, func) {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            return array[i]
        }
    }
}

console.log(students.findIndex(s => s.name === 'Alex'))
console.log(findIndex(students, s => s.name === 'Alex'))

function findIndex (array, func) {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            return [i]
        }
    }
}


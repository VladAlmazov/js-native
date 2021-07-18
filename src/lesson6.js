const arr = [34, 12, 999, 77, 0, 87, 23, ];

//bubble sort

for (let j = 0; j < arr.length - 1; j++) {

    for (let i = 0; i < arr.length - 1 - j; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]  // меняет элементы в масиве местами // деструктурирующее присваивание
        }
    }
}
console.log(arr);

//sort

const names = ['Bob', 'Alex', 'Nick', 'Donald', 'Joe', '999', 'alex', 'Юрий'];  // по умолчанию сортируются по таблице юникода
console.log(names.sort());

const numbers = [9, 1000, 3, 100];

// function compareFunc (a, b) {
//     if(a <= b) {
//         return -1  // любое отрицательное число пишем
//     } else {
//         return 1  // любое положительное число  пишем
//     }
// }

const compareFunc = (a, b) => a - b  // будет либо положительное число либо отрицательное, если будет 0 то ничего не будет меняться
console.log(numbers.sort(compareFunc))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];

const stCopy = [...students];
console.log(stCopy.sort((a, b) => a.scores - b.scores).reverse());
console.log(stCopy.sort((a, b) => a.name.toUpperCase() <= b.name.toUpperCase() ? -1 : 1));
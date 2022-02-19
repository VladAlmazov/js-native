const todoListID_1 = '234yuya-231sd2'
const todoListID_2 = '25756yuya-231sd2'
const todoListID_3 = '29808yuya-231sd2'

const todoLists = [
    {
        id: todoListID_1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: todoListID_2,
        title: 'What to read',
        filter: 'all',
    },
    {
        id: todoListID_3,
        title: 'What to buy',
        filter: 'all',
    }
]

const tasks = {
    [todoListID_1]: // Код который находиться в квадратных скобках должен быть выполнен и результат выполнения станет свойством
        [
            {id: '234yuya-231sqw', title: 'React', isDone: false},
            {id: '234yuya-23541sqw', title: 'Redux', isDone: false},
            {id: '234yu123ya-231sqw', title: 'CSS', isDone: false},
        ],
    [todoListID_2]: [
        {id: '234asd2yuya-231sqw', title: 'React', isDone: false},
        {id: '234yu321ya-231sqw', title: 'React', isDone: false},
        {id: '234yu543ya-231sqw', title: 'React', isDone: false},
    ],
    [todoListID_3]: [
        {id: '234yuya-2375641sqw', title: 'React', isDone: false},
        {id: '234y564uya-231sqw', title: 'React', isDone: false},
        {id: '234yuya-2464331sqw', title: 'React', isDone: false},
    ]
}

console.log(tasks[todoListID_1].find(t => t.id === '234yu123ya-231sqw'))
console.log(tasks['234yuya-231sd2'].find(t => t.id === '234yu123ya-231sqw'))// 3 строки = одно и то же
console.log(tasks[todoLists[0].id].find(t => t.id === '234yu123ya-231sqw'))

// .reduce
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
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
        scores: 100
    },
];

const numbers = [1, 2, 3, 4, 5, 6]

//console.log(numbers.reduce())
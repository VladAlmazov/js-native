const studentFirst = { // new Object() => №247, записывает в ячейку памяти
    name: 'Vlad',
    age: 23,
    friends: ['Denis', 'Andrei'] // new Array() => #645, записывает в ячейку памяти
}

const copyStudent = { // new Object() => №248, записывает в ячейку памяти
    ...studentFirst, // ... - спред оператор
    name: 'Igor',
    friends: [...studentFirst.friends]
}

function func(num) {
    const fn = () => console.log(num)
    return [num, fn]  // если хоти вернуть несколько сущностей, либо [] либо {}
}

const result = func(10);
console.log(result)

// const ten = result[0];
// const logTen = result[1];
// logTen();

const [ten, logTen] = func (10);
const [twelve, logTwelve] = func (12);
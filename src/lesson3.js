//event
//function -> подписчик, слушатель, обработчик, subscriber, listener, handler
//Сгенерированный браузером объект особого типа -> e, ev, event -> протокол события

// const newDiv = document.createElement('div')
// newDiv.style.height = '50px'
// newDiv.style.backgroundColor = 'black'
// newDiv.style.display = 'none'
// newDiv.style.cssText = 'height: 10px'
// sm.append(newDiv)


const  sml = document.getElementById('small');

console.dir(sml);


function onClickHandler (e) {
    e.stopPropagation()  //  событие заканчиваеться в этом элементе и не идет дальше (останавливает всплытие события)
    // console.log(e.currentTarget)  //  защищает от назойливых потомков

    if(e.target.tagName === 'BUTTON'){  // делегирование обработки события
        console.log(e.target.name)
    }
}

sml.onclick = onClickHandler;
// sml.onclick = null;

document.body.onclick = onClickHandler;

// e.currentTarget -> элемент, который вызвал обработчик (в процесе всплытия)
// e.target -> элемент, который сгенерировал событие (первый получил клик)
// e.preventDefault -> предотвратить поведение по умолчанию (почитать потом)

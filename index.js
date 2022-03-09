console.log(document)
const getForm = document.querySelector('#form');
const getInput = document.querySelector('#input');
const getToDos = document.querySelector('#todos');

const addToDo = (todo) => {
    let toDoText = getInput.value
    if(todo) {
        toDoText = todo.text
    }
    if(toDoText){
        const todoEl = document.createElement('li')
        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }
        todoEl.innerText = toDoText;

        todoEl.addEventListener('click', () => {todoEl.classList.toggle('completed')
//             updateLS();
        });
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEl.remove();
//             updateLS();
        })

        getToDos.appendChild(todoEl)
        getInput.value = ''
        updateLS()
    }
}

// const todos = JSON.parse(localStorage.getItem('todos'));
// if(todos){
//     todos.forEach(todo => addToDo(todo))
// }


// getForm.addEventListener('submit',(e) => {
//     e.preventDefault()
//     addToDo();
// })


// function updateLS (){
//     todoEl = document.querySelectorAll('li');
//     const todos = [];
//     todoEl.forEach(todoEl => {
//         todos.push({
//             text: todoEl.innerText,
//             completed: todoEl.classList.contains('completed')
//         })
//     })
//     localStorage.setItem('todos',JSON.stringify(todos));
// };


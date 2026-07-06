const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = todoInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        todoInput.value = '';
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.style.flex = '1';
    li.appendChild(taskSpan);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);

    taskSpan.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        li.remove();
    });

    todoList.appendChild(li);
}

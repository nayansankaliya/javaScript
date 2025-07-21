let todoList = [];

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value.trim();
  let todoDate = dateElement.value;

  if (todoItem === '' || todoDate === '') {
    alert("Field cannot be empty!");
    return;
  }

  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  containerElement.innerHTML = '';

  todoList.forEach((todo, index) => {
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo-item';

    todoDiv.innerHTML = `
      <span>${todo.item}</span>
      <span>${todo.dueDate}</span>
      <button class="btn-delete" onclick="deleteTodo(${index})">Delete</button>
    `;
    containerElement.appendChild(todoDiv);
  });
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayItems();
}

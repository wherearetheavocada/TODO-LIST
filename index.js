const root = document.querySelector('#root');

let todoCount = 0;

const updateTodoCount = () => {
  allTodo.textContent = `All: ${todoCount}`;
};

const navigatorFirstSection = document.createElement('div');
navigatorFirstSection.classList.add('navigatorFirstSection');

const btnDelAll = document.createElement('button');
btnDelAll.textContent = 'Delete All';
btnDelAll.classList.add('btnDelAll');

const btnDelLast = document.createElement('button');
btnDelLast.textContent = 'Delete Last';
btnDelLast.classList.add('btnDelLast');

const input = document.createElement('input');
input.placeholder = 'Enter todo...';
input.type = 'input';
input.classList.add('input');

const btnAdd = document.createElement('button');
btnAdd.textContent = 'Add';
btnAdd.classList.add('btnAdd');

root.append(navigatorFirstSection);
navigatorFirstSection.append(btnDelAll, btnDelLast, input, btnAdd);

const navigatorSecondSection = document.createElement('div');
navigatorSecondSection.classList.add('navigatorSecondSection');

const allTodo = document.createElement('p');
updateTodoCount()
allTodo.classList.add('allTodo');

const completed = document.createElement('p');
completed.textContent = 'Completed: 1';
completed.classList.add('completed');

const btnShowAll = document.createElement('button');
btnShowAll.textContent = 'Show All';
btnShowAll.classList.add('btnShowAll');

const btnShowCompleted = document.createElement('button');
btnShowCompleted.textContent = 'Show Completed';
btnShowCompleted.classList.add('btnShowCompleted');

const search = document.createElement('input');
search.placeholder = 'Search...';
search.type = 'input';
search.classList.add('search');

root.append(navigatorSecondSection)
navigatorSecondSection.append(allTodo, completed, btnShowAll, btnShowCompleted, search)

btnAdd.addEventListener('click', () => {
  const todoTextValue = input.value.trim();
  if (todoTextValue) {
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todoEl = document.createElement('div');
    todoEl.classList.add('todoEl');

    const btnColor = document.createElement('button');
    btnColor.textContent = "\u2713";
    btnColor.classList.add('btnColor');

    const todoText = document.createElement('p');
    todoText.textContent = todoTextValue;
    todoText.classList.add('todoText');

    const todoElSection = document.createElement('div');
    todoElSection.classList.add('todoElSection');

    const btnDelCurTodo = document.createElement('button');
    btnDelCurTodo.textContent = 'X';
    btnDelCurTodo.classList.add('btnDelCurTodo');

    const date = document.createElement('p');
    date.textContent = new Date().toLocaleString();
    date.classList.add('date');

    todo.append(todoEl);
    todoEl.append(btnColor, todoText, todoElSection);
    todoElSection.append(btnDelCurTodo, date);

    root.append(todo);

    todoCount++;
    updateTodoCount();

    input.value = '';
  } else {
    alert('Please enter a todo!');
  }
});

root.addEventListener('click', (event) => {
  if (event.target.classList.contains('btnDelCurTodo')) {
    const currentTodo = event.target.closest('.todo');
    if (currentTodo) {
      currentTodo.remove();
      todoCount--;
      updateTodoCount();
    }
  }

  if (event.target.classList.contains('btnColor')) {
    const currentTodo = event.target.closest('.todoEl');
    if (currentTodo) {
      currentTodo.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
  }
});

btnDelAll.addEventListener('click', () => {
  const todos = document.querySelectorAll('.todo');
  todos.forEach(todo => todo.remove());
  todoCount = 0;
  updateTodoCount();
});

btnDelLast.addEventListener('click', () => {
  const todos = document.querySelectorAll('.todo');
  if (todos.length > 0) {
    const lastTodo = todos[todos.length - 1];
    lastTodo.remove();
    todoCount--;
    updateTodoCount();
  }
});

search.addEventListener('input', (event) => {
  const searchValue = event.target.value.toLowerCase(); // Получаем введенный текст в нижнем регистре
  const todos = document.querySelectorAll('.todo'); 

  todos.forEach((todo) => {
    const todoText = todo.querySelector('.todoText'); 
    if (todoText) {
      const text = todoText.textContent.toLowerCase(); // Текст внутри todoText в нижнем регистре
      if (text.includes(searchValue)) {
        todo.style.display = 'block'; // Показываем, если текст соответствует
				todo.style.display = 'flex';
      } else {
        todo.style.display = 'none'; // Скрываем, если текст не соответствует
      }
    }
  });
});

btnShowAll.addEventListener('click', () => {
  const todos = document.querySelectorAll('.todo'); // Получаем все задачи
  todos.forEach((todo) => {
    todo.style.display = 'flex'; // Показываем каждую задачу
  });
});
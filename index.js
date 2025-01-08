const root = document.querySelector('#root');

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
allTodo.textContent = 'All: 1';
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
input.placeholder = 'Search...';
input.type = 'input';
search.classList.add('search');

root.append(navigatorSecondSection)
navigatorSecondSection.append(allTodo, completed, btnShowAll, btnShowCompleted, search)

const todo = document.createElement('div');
todo.classList.add('todo');

const todoEl = document.createElement('div');
todoEl.classList.add('todoEl');

const btnPlus = document.createElement('button');
btnPlus.textContent = "\u2713";
btnPlus.classList.add('btnPlus');

const todoText = document.createElement('p');
todoText.textContent = 'Todo text';
todoText.classList.add('todoText');

const todoElSection = document.createElement('div');
todoElSection.classList.add('todoElSection');

const btnX = document.createElement('button');
btnX.textContent = 'X';
btnX.classList.add('btnX');

const date = document.createElement('p');
date.textContent = 'Date';
date.classList.add('date');

todo.append(todoEl)
todoEl.append(todoElSection);
todoElSection.append(btnX, date);

root.append(todo);
todoEl.append(btnPlus, todoText, todoElSection);
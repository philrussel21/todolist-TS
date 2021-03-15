import { Chore } from './models/Chore.js';
import { ShoppingList } from './models/ShoppingList.js';
import { ToDoTemplate } from './models/ToDoTemplate.js';
const form = document.querySelector('form');
const toDoType = document.querySelector('#todo');
const details = document.querySelector('#details');
const qty = document.querySelector('#qty');
const choreUL = document.querySelector('.chore-list');
const shoppingUL = document.querySelector('.shopping-list');
let type = toDoType.value;
toDoType.addEventListener('change', () => {
    type = toDoType.value;
    if (type === 'chores') {
        qty.disabled = true;
    }
    else {
        qty.disabled = false;
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let todo;
    if (type === 'chores') {
        todo = new Chore(details.value);
        const choreList = new ToDoTemplate(choreUL);
        choreList.renderChore(todo);
    }
    else {
        todo = new ShoppingList(details.value, qty.valueAsNumber);
    }
    details.value = '';
    qty.value = '';
});

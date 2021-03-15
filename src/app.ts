import { Chore } from './models/Chore.js';
import { ShoppingList } from './models/ShoppingList.js';
import { ToDoTemplate } from './models/ToDoTemplate.js';

const form = document.querySelector('form') as HTMLFormElement;
const toDoType = document.querySelector('#todo') as HTMLSelectElement;
const details = document.querySelector('#details') as HTMLInputElement;
const qty = document.querySelector('#qty') as HTMLInputElement;
const choreUL = document.querySelector('.chore-list') as HTMLUListElement;
const shoppingUL = document.querySelector('.shopping-list') as HTMLUListElement;

let type: string = toDoType.value;

toDoType.addEventListener('change', () => {
	type = toDoType.value;
	if (type === 'chores') {
		qty.disabled = true;
	} else {
		qty.disabled = false;
	}
});

form.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	let todo: Chore | ShoppingList;

	if (type === 'chores') {
		todo = new Chore(details.value);
		const choreList = new ToDoTemplate(choreUL);
		// Renders the Chore to the DOM
		choreList.renderChore(todo);
	} else {
		todo = new ShoppingList(details.value, qty.valueAsNumber);
		const shopList = new ToDoTemplate(shoppingUL);
		// Renders the Shopping Item to the DOM
		shopList.renderAndAddShoppingItem(todo);
	}

	// Clears the details input field after submission
	details.value = '';
	qty.value = '';
});

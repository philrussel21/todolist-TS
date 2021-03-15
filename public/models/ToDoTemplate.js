export class ToDoTemplate {
    constructor(container) {
        this.container = container;
    }
    renderChore(chore) {
        const cont = document.createElement('div');
        const cbox = document.createElement('input');
        const label = document.createElement('label');
        cbox.type = 'checkbox';
        cbox.name = chore.details;
        cbox.id = chore.details;
        label.htmlFor = chore.details;
        label.innerText = chore.details;
        cbox.addEventListener('change', () => {
            cbox.checked
                ? label.classList.toggle('checked')
                : label.classList.toggle('checked');
        });
        cont.append(cbox, label);
        this.container.append(cont);
    }
    renderAndAddShoppingItem(item) {
        const shoppingListForm = document.querySelector('#shopping-list-form');
        const qtyDone = shoppingListForm.querySelector('input');
        const itemDone = shoppingListForm.querySelector('select');
        // Removes disabled attribute when an initial item was added to shopping list
        qtyDone.disabled = qtyDone.disabled && false;
        itemDone.disabled = itemDone.disabled && false;
        // Creating an li to render to DOM
        const li = document.createElement('li');
        li.innerText = item.format();
        // Creating an option value inside the shopping list dropdown
        const opt = document.createElement('option');
        opt.value = item.details;
        opt.innerText = item.details;
        itemDone.append(opt);
        this.container.append(li);
    }
}

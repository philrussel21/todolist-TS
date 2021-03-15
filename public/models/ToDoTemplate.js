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
    renderShoppingItem(item) {
        const li = document.createElement('li');
        li.innerText = item.format();
        this.container.append(li);
    }
}

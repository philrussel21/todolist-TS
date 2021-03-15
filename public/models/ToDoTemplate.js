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
        const cont = document.createElement('div');
        const form = document.createElement('form');
        const qty = document.createElement('input');
        const label = document.createElement('label');
        const btn = document.createElement('button');
        qty.type = 'number';
        qty.id = item.details;
        qty.value = item.getQty();
        label.htmlFor = item.details;
        label.innerText = item.details;
        btn.innerText = 'DONE';
        form.append(qty, label, btn);
        cont.append(form);
        this.container.append(cont);
    }
}

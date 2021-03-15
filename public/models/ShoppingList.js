export class ShoppingList {
    constructor(details, qty, isDone = false) {
        this.details = details;
        this.qty = qty;
        this.isDone = isDone;
    }
    doShop(num) {
        this.qty = -num;
        return this.qty;
    }
    format() {
        return `<span class="qty">${this.qty}</span> x ${this.details}`;
    }
    isShopDone() {
        this.isDone = this.qty <= 0;
        return this.isDone;
    }
}

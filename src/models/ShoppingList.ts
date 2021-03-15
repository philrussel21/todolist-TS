import { HasDetails } from '../interfaces/HasDetails';
export class ShoppingList implements HasDetails {
	constructor(
		readonly details: string,
		private qty: number,
		private isDone: boolean = false
	) {}

	doShop(num: number): number {
		this.qty = -num;
		return this.qty;
	}

	format(): string {
		return `<span class="qty">${this.qty}</span> x ${this.details}`;
	}

	isShopDone(): boolean {
		this.isDone = this.qty <= 0;
		return this.isDone;
	}
}

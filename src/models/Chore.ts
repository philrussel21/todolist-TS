import { HasDetails } from '../interfaces/HasDetails';
export class Chore implements HasDetails {
	constructor(readonly details: string, private isDone: boolean = false) {}

	doChore() {
		this.isDone = true;
	}
}

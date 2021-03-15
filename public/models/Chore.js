export class Chore {
    constructor(details, isDone = false) {
        this.details = details;
        this.isDone = isDone;
    }
    doChore() {
        this.isDone = true;
    }
}

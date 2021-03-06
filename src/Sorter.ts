import {ISortable} from "./ISortable";

export class Sorter {

    constructor(public collection: ISortable) { }

    sort(): void {
        const length = this.collection.length;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1)
                }
            }
        }
    }
}



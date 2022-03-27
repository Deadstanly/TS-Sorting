export class NumbersCollection {

    constructor(public dataArray: number[]) { }

    compare(minIndex:number, maxIndex:number): boolean {
         return this.dataArray[minIndex] > this.dataArray[maxIndex];
    }

    swap(minIndex:number, maxIndex:number):void {
        const min = this.dataArray[minIndex];
        this.dataArray[minIndex] = this.dataArray[maxIndex];
        this.dataArray[maxIndex] = min;
    }

    get length():number {
        return this.dataArray.length;
    }
}
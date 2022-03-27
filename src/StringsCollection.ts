export class StringsCollection {
    constructor(public stringData: string) {}

    get length():number {
        return this.stringData.length
    }

    compare(minIndex: number, maxIndex: number): boolean {
        return this.stringData[minIndex].toLocaleLowerCase() > this.stringData[maxIndex].toLocaleLowerCase()
    }

    swap(minIndex: number, maxIndex: number):void {
        const charactersArray = this.stringData.split('');
        const min = charactersArray[minIndex];
        charactersArray[minIndex] = charactersArray[maxIndex];
        charactersArray[maxIndex]= min;
        this.stringData = charactersArray.join('');
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringsCollection = void 0;
class StringsCollection {
    constructor(stringData) {
        this.stringData = stringData;
    }
    get length() {
        return this.stringData.length;
    }
    compare(minIndex, maxIndex) {
        return this.stringData[minIndex].toLocaleLowerCase() > this.stringData[maxIndex].toLocaleLowerCase();
    }
    swap(minIndex, maxIndex) {
        const charactersArray = this.stringData.split('');
        const min = charactersArray[minIndex];
        charactersArray[minIndex] = charactersArray[maxIndex];
        charactersArray[maxIndex] = min;
        this.stringData = charactersArray.join('');
    }
}
exports.StringsCollection = StringsCollection;

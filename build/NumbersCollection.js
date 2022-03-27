"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(dataArray) {
        this.dataArray = dataArray;
    }
    compare(minIndex, maxIndex) {
        return this.dataArray[minIndex] > this.dataArray[maxIndex];
    }
    swap(minIndex, maxIndex) {
        const min = this.dataArray[minIndex];
        this.dataArray[minIndex] = this.dataArray[maxIndex];
        this.dataArray[maxIndex] = min;
    }
    get length() {
        return this.dataArray.length;
    }
}
exports.NumbersCollection = NumbersCollection;

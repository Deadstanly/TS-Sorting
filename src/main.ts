import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {StringsCollection} from "./StringsCollection";

const stringsCollection = new StringsCollection('OpHredfWqqs')
const numbersCollections = new NumbersCollection([-10, 3 , 333 ,-85 , 150])

const sorter = new Sorter(numbersCollections);
const sorterStr = new Sorter(stringsCollection);

sorterStr.sort();
sorter.sort();

console.log(numbersCollections.dataArray);
console.log(stringsCollection.stringData);

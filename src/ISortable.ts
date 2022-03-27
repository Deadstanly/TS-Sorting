export interface ISortable {
    length: number;
    compare(minIndex:number, maxIndex:number): boolean;
    swap(minIndex:number, maxIndex:number): void;
}
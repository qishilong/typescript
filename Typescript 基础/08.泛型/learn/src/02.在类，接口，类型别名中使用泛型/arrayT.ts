export class ArrayT<T> {
    constructor(private arr: T[]) { }

    private tools = {
        getRandom(min: number, max: number) {
            return Math.floor(Math.random() * (max - min) + min);
        }
    };

    take(n: number): T[] {
        if (n >= this.arr.length) {
            return this.arr;
        }
        const newArr: T[] = [];
        for (let i = 0; i < n; i++) {
            newArr.push(this.arr[i]);
        }
        return newArr;
    }

    shuffle() {
        for (let i = 0; i < this.arr.length; i++) {
            const changeIndex = this.tools.getRandom(0, this.arr.length);
            const item = this.arr[i];
            this.arr[i] = this.arr[changeIndex];
            this.arr[changeIndex] = item;
        }
    }
}
export type Callback<V, I> = (item: V, i: I) => void;

export class Dictionary<T, K> {
    private keys: T[] = [];
    private values: K[] = [];

    get size() {
        return this.keys.length;
    }

    set(key: T, value: K) {
        const index = this.keys.indexOf(key);
        if (index < 0) {
            this.keys.push(key);
            this.values.push(value);
        } else {
            this.values[index] = value;
        }
    }

    forEach(callback: Callback<T, K>) {
        this.keys.forEach((item, i) => {
            const value = this.values[i];
            callback(item, value);
        });
    };

    delete(key: T) {
        const index = this.keys.indexOf(key);
        if (index === -1) {
            return;
        }
        this.keys.splice(index, 1);
        this.values.splice(index, 1);
    }

    has(key: T) {
        return this.keys.includes(key);
    }
}
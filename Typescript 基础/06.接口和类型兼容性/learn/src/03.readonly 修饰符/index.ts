const array: readonly number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const array1: number[] = [1, 2, 3, 4, 5, 6];

// array.push ❌
// array1.push ✅

interface Obj {
    name: string;
    readonly age: number;
}

const obj: Obj = {
    name: "obj",
    age: 18
};

// obj.age = 20; ❌
console.log(obj);

const array2: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array2.push() ❌

interface Obj1 {
    name: string,
    readonly id: readonly string[]; // 对象中仅允许对数组和元组字面量类型使用 "readonly" 类型修饰符
}

const obj1: Obj1 = {
    name: "obj1",
    id: ["1", "2"]
};

// obj1.id.push() ❌
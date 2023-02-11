// function sum(a: number, b: number): number {
//     return a + b;
// }

function sum(a: number, b: number) {
    return a + b;
}

// sum("1", "2"); 
console.log(sum(1, 2));

let phone: number = 1234545544;
/**
 * 虽然没有明确规定，但根据习惯，电话号码应该是字符串格式
 */
let phone1: string = "123456654";

function fun(a: number, b: number): boolean {
    if (a % b === 0) {
        return true;
    }
    return false;
}

const num: number = 1;
const str: string = "1";
const obj: Object = {};
const arr: number[] = [];
const bool: boolean = true;
const nu: null = null;
const undef: undefined = undefined;

// 联合类型
let maybe: string | undefined;

// 类型保护
let two: boolean | number = 1;
function judge(param: boolean | number) {
    if (typeof param === "boolean") {
        param = true;
    }
}

judge(two);

// void 类型
function fun1(): void {

}

// never 类型
function fun2(msg: string): never {
    throw new Error(msg);
}

// 字面量类型
let user: {
    name: string,
    age: number;
};
user = {
    name: "小明",
    age: 18
};

let gender: "男" | "女";
gender = "男";

let arr1: [];

// 元组类型
let arr2: [string, number];
arr2 = ["1", 1];

// any 类型
let obj1: any;
obj1 = 1;

let obj2: object;
obj2 = {
    a: "1",
    b: 1
};
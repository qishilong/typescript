// function sum(a: number, b: number): number {
//     return a + b;
// }
function sum(a, b) {
    return a + b;
}
// sum("1", "2"); 
sum(1, 2);
let phone = 1234545544;
/**
 * 虽然没有明确规定，但根据习惯，电话号码应该是字符串格式
 */
let phone1 = "123456654";
function fun(a, b) {
    if (a % b === 0) {
        return true;
    }
    return false;
}
const num = 1;
const str = "1";
const obj = {};
const arr = [];
const bool = true;
const nu = null;
const undef = undefined;
// 联合类型
let maybe;
// 类型保护
let two = 1;
function judge(param) {
    if (typeof param === "boolean") {
        param = true;
    }
}
judge(two);
// void 类型
function fun1() {
}
// never 类型
function fun2(msg) {
    throw new Error(msg);
}
// 字面量类型
let user;
user = {
    name: "小明",
    age: 18
};
let gender;
gender = "男";
let arr1;
// 元组类型
let arr2;
arr2 = ["1", 1];
// any 类型
let obj1;
obj1 = 1;
let obj2;
obj2 = {
    a: "1",
    b: 1
};
let users = {
    name: "小明",
    age: 18,
    gender: "男"
};
function combine(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a * b;
    }
    throw new Error("a和b必须是同一类型");
}
combine(1, 1);
combine("1", "1");
// 可选参数
function optional(a, b, c) {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
function optional1(a, b, c = 0) {
    return a + b;
}
;
optional(1, "1", 1);
optional1(1, "1");

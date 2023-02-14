// interface User {
//     name: string;
//     age: number;
//     height: number;
//     weight: number;
// };

// interface TwoUser extends User {
//     name1: string;
//     age1: number;
//     height1: number;
// }

// type UserT = {
//     name: string;
//     age: number;
//     height: number;
//     weight: number;
// };

// let use: User = {
//     name: "a",
//     age: 18,
//     height: 180,
//     weight: 100
// };
// let use1: UserT = {
//     name: "a",
//     age: 18,
//     height: 180,
//     weight: 100
// };

// let twoUser: TwoUser = {
//     name: "b",
//     age: 18,
//     height: 180,
//     weight: 180,
//     name1: "b",
//     age1: 19,
//     height1: 180,
// }

// type A = {
//     a: string;
// };

// type B = {
//     b: number;
// };

// type C = {
//     c: boolean;
// } & A & B & User;

// let a: C = {
//     a: "1",
//     b: 1,
//     c: true,
//     name: "a",
//     age: 18,
//     height: 180,
//     weight: 10
// };

interface Func {
    name: string;
    sum(a: number, b: number): number;
    delete(): void;
}

let func: Func = {
    name: "Tony",
    sum(a: number, b: number) {
        console.log(a + b);
        return a + b;
    },
    delete() {
        console.log("Deleting");
    }
};

func.sum(1, 2);
func.delete();

type FuncType = {
    name: string;
    sum: (a: number, b: number) => number;
    delete: () => void;
};

let funcType: FuncType = {
    name: "funcType",
    sum(a, b) {
        console.log(a + b);
        return a + b;
    },
    delete() {
        console.log("delete called");
    }
};

funcType.sum(1, 2);
funcType.delete();

// interface Filter {
//     (a: number): boolean;
// }

type Filter = (n: number) => boolean;

const arr = [1, 2, 34, 3, 4, 3, 2, 3];

const result = (arr: number[], callback: Filter) => {
    let res: number[] = [];
    arr.filter(item => {
        if (callback(item)) {
            res.push(item);
        }
    });
    console.log(res);
    return res;
};

result(arr, item => item % 2 === 0);
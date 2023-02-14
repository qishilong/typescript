let func = {
    name: "Tony",
    sum(a, b) {
        console.log(a + b);
        return a + b;
    },
    delete() {
        console.log("Deleting");
    }
};
func.sum(1, 2);
func.delete();
let funcType = {
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
const arr = [1, 2, 34, 3, 4, 3, 2, 3];
const result = (arr, callback) => {
    let res = [];
    arr.filter(item => {
        if (callback(item)) {
            res.push(item);
        }
    });
    console.log(res);
    return res;
};
result(arr, item => item % 2 === 0);

// 讲两个数组混合
// [1,2,3] + ["a","b","c"] = [1, "a", 2, "b", 3, "c"]

const arr1 = [1, 2, 3, 4], arr2 = ["a", "b", "c", "d", "e", "f"];

const mixArray = <T, K>(arr1: T[], arr2: K[]): (T | K)[] => {
    const length = arr1.length > arr2.length ? arr1.length : arr2.length;

    const result: (T | K)[] = [];
    for (let i = 0; i < length; i++) {
        if (!arr1[i]) {
            result.push(arr2[i]);
        } else if (!arr2[i]) {
            result.push(arr1[i]);
        } else {
            result.push(arr1[i], arr2[i]);
        }
    }
    return result;
};

const mixResult = mixArray(arr1, arr2);
console.log(mixResult);
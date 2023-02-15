const func = <T>(arr: T[], b: number): T[] => {
    if (b >= arr.length) {
        return arr;
    }
    const newArr: T[] = [];
    for (let i = 0; i < b; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
};

// function func<T>(arr: T[], b: number): T[] {
//     if (b > arr.length) {
//         return arr;
//     }
//     const newArr: T[] = [];
//     for (let i = 0; i < b; i++) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

const result = func(["1", 2, 34, 5, 6], 2);
console.log(result);
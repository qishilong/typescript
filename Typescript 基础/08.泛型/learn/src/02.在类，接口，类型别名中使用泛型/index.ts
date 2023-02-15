import { ArrayT } from "./arrayT";

const arrayT = new ArrayT([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

arrayT.shuffle();
const takeArr = arrayT.take(2);
console.log(takeArr);
